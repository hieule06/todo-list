import { notification } from "antd";
import { useEffect, useState } from "react";
import { useToDoContext } from "../../../layout/TodoProvider";
import dayjs from "dayjs";
import ModalAddMemberView from "./ModalAddMemberView";
import PropTypes from "prop-types";

const ModalAddMember = ({ isEdit, handleIsEdit }) => {
  const { cardData, isOpenModal, handleIsOpenModal, handleUpdateCardData } =
    useToDoContext();

  const defaultObj = {
    name: "",
    email: "",
    job: "",
    status: true,
    date: null
  };
  const statusOptions = [
    { value: true, label: "Online" },
    { value: false, label: "Offline" }
  ];
  const [isRequired, setIsRequired] = useState(false);
  const [formData, setFormData] = useState(defaultObj);

  const [api, contextHolder] = notification.useNotification();

  const showToastCreateSuccess = (placement) => {
    api.success({
      message: `Create member successfully !`,
      placement
    });
  };

  const showToastEditSuccess = (placement) => {
    api.success({
      message: `Edit member successfully !`,
      placement
    });
  };

  const handleInputChange = (e) => {
    if (e && e.target) {
      setFormData({
        ...formData,
        [e.target.id]:
          e.target.value === "true"
            ? true
            : e.target.value === "false"
            ? false
            : e.target.value
      });
    } else {
      setFormData({
        ...formData,
        date: e
      });
    }
  };

  const handleSave = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      formData.name &&
      formData.email &&
      formData.job &&
      emailRegex.test(formData.email)
    ) {
      setIsRequired(false);
      setFormData(defaultObj);
      if (cardData && cardData.id) {
        handleUpdateCardData({ ...cardData, ...formData });
        showToastEditSuccess();
      } else {
        if (!formData.date) {
          formData.date = new Date();
        }
        handleUpdateCardData(formData);
        showToastCreateSuccess();
      }
      handleIsEdit(false);
      handleIsOpenModal();
    } else {
      setIsRequired(true);
    }
  };

  const handleCancel = () => {
    setFormData(defaultObj);
    handleIsEdit(false);
    handleUpdateCardData({});
    handleIsOpenModal();
    setIsRequired(false);
  };

  useEffect(() => {
    if (cardData && cardData.name) {
      cardData.date = dayjs(cardData.date);
      setFormData({ ...cardData });
    }
    if (cardData && !cardData.name && !cardData.id) {
      setFormData(defaultObj);
    }
  }, [cardData]);

  return (
    <ModalAddMemberView
      isOpenModal={isOpenModal}
      isEdit={isEdit}
      handleSave={handleSave}
      handleCancel={handleCancel}
      contextHolder={contextHolder}
      formData={formData}
      handleInputChange={handleInputChange}
      isRequired={isRequired}
      statusOptions={statusOptions}
    ></ModalAddMemberView>
  );
};

ModalAddMember.propTypes = {
  isEdit: PropTypes.bool.isRequired,
  handleIsEdit: PropTypes.func.isRequired
};

export default ModalAddMember;
