import InputModal from "../../../layout/containter/component/InputModal";
import { DatePicker, Modal } from "antd";
import FooterModal from "../../../layout/containter/component/FooterModal";
import PropTypes from "prop-types";
import dayjs from "dayjs";

const ModalAddMemberView = ({
  isOpenModal,
  isEdit,
  handleSave,
  handleCancel,
  contextHolder,
  formData,
  handleInputChange,
  isRequired,
  statusOptions
}) => {
  return (
    <Modal
      className="wrapper-modal-add-member"
      open={isOpenModal}
      title={isEdit ? "Update Member" : "Create New Member"}
      onOk={handleSave}
      onCancel={handleCancel}
      footer={() => (
        <FooterModal
          isEdit={isEdit}
          onOK={handleSave}
          onCancel={handleCancel}
        ></FooterModal>
      )}
    >
      {contextHolder}
      <div className="">
        <form className="p-4 md:p-5">
          <div className="grid gap-4 mb-4 grid-cols-2">
            <div className="col-span-2">
              <InputModal
                label="Name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                isRequired={isRequired}
              ></InputModal>
            </div>
            <div className="col-span-2">
              <InputModal
                label="Email"
                name="email"
                placeholder="example@example.com"
                value={formData.email}
                onChange={handleInputChange}
                isRequired={isRequired}
              ></InputModal>
            </div>
            <div className="col-span-2 sm:col-span-1 mb-3">
              <InputModal
                label="Job"
                name="job"
                placeholder="What's your job?"
                value={formData.job}
                onChange={handleInputChange}
                isRequired={isRequired}
              ></InputModal>
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
                {statusOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
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
                allowClear={false}
                value={formData.date ? formData.date : dayjs(new Date())}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 p-[10px] bg-[#f9fafb]"
                id="date"
                format={{
                  format: "YYYY/MM/DD",
                  type: "mask"
                }}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

ModalAddMemberView.propTypes = {
  isOpenModal: PropTypes.bool.isRequired,
  isRequired: PropTypes.bool.isRequired,
  isEdit: PropTypes.bool.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  contextHolder: PropTypes.any.isRequired,
  formData: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  statusOptions: PropTypes.object.isRequired
};

export default ModalAddMemberView;
