import { DatePicker, Modal } from "antd";
import PropTypes from "prop-types";
import FooterModal from "./FooterModal";
import { useEffect, useState } from "react";
import { useCardContext } from "../layout/CardProvider";
import dayjs from "dayjs";

const ModalAddMember = () => {
  const {
    cardData,
    isOpenModal,
    handleIsOpenModal,
    updateCardData,
    isEdit,
    handleIsEdit
  } = useCardContext();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    job: "",
    status: true,
    date: null,
    img: null
  });

  const onChange = (date) => {
    setFormData({
      ...formData,
      date: date
    });
  };

  const handleInputChange = (e) => {
    if (e.file && e.file.type === "image/jpeg") {
      setFormData({
        ...formData,
        img: e.file
      });
    } else {
      setFormData({
        ...formData,
        [e.target.id]:
          e.target.value === "true"
            ? true
            : e.target.value === "false"
            ? false
            : e.target.value
      });
    }
  };

  const handleOk = () => {
    setFormData({
      name: "",
      email: "",
      job: "",
      status: true,
      date: null,
      img: null
    });
    if (cardData && cardData.id) {
      updateCardData({ ...cardData, ...formData });
    } else {
      updateCardData(formData);
    }
    handleIsEdit(false);
    handleIsOpenModal();
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      email: "",
      job: "",
      status: true,
      date: null,
      img: null
    });
    handleIsEdit(false);
    updateCardData({});
    handleIsOpenModal();
  };

  useEffect(() => {
    if (cardData && cardData.name) {
      cardData.date = dayjs(cardData.date);
      setFormData({ ...cardData });
    }
    if (cardData && !cardData.name && !cardData.id) {
      setFormData({
        name: "",
        email: "",
        job: "",
        status: true,
        date: null,
        img: null
      });
    }
  }, [cardData]);

  return (
    <Modal
      className="wrapper-modal-add-member"
      open={isOpenModal}
      title={isEdit ? "Update Member" : "Create New Member"}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={() => (
        <FooterModal onOK={handleOk} onCancel={handleCancel}></FooterModal>
      )}
    >
      <div className="">
        <form className="p-4 md:p-5">
          <div className="grid gap-4 mb-4 grid-cols-2">
            <div className="col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                value={formData.name}
                onChange={handleInputChange}
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Name"
                required=""
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                value={formData.email}
                onChange={handleInputChange}
                type="text"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="example@example.com"
                required=""
              />
            </div>
            <div className="col-span-2 sm:col-span-1 mb-3">
              <label
                htmlFor="job"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Job
              </label>
              <input
                value={formData.job}
                onChange={handleInputChange}
                type="text"
                name="job"
                id="job"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="example@example.com"
                required=""
              />
            </div>
            <div className="col-span-2 sm:col-span-1 mb-3">
              <label
                htmlFor="status"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Status
              </label>
              <select
                value={formData.status}
                onChange={handleInputChange}
                id="status"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option value={true}>Online</option>
                <option value={false}>Offline</option>
              </select>
            </div>
            <div className="col-span-2 sm:col-span-1 mb-3">
              <label
                htmlFor="date"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Date
              </label>
              <DatePicker
                value={formData.date}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 p-[10px] bg-[#f9fafb]"
                id="date"
                format={{
                  format: "YYYY/MM/DD",
                  type: "mask"
                }}
                onChange={onChange}
              />
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

ModalAddMember.propTypes = {
  openModal: PropTypes.bool.isRequired,
  onOpenModal: PropTypes.func.isRequired
};

export default ModalAddMember;
