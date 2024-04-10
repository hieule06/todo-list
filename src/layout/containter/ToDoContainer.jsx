import { useEffect, useState } from "react";
import "./ToDoContainer.scss";
import { useToDoContext } from "../TodoProvider";
import dayjs from "dayjs";
import ToDoItem from "./component/ToDoItem";
import { notification } from "antd";
import ModalAddMember from "../../core/component/modal/ModalAddMember";
import axiosInstance from "../../services/api";

const ToDoContainer = () => {
  const { cardData, handleIsOpenModal, handleUpdateCardData } =
    useToDoContext();

  const [listMember, setListMember] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const showToastDeleteSuccess = (placement) => {
    api.success({
      message: `Delete member successfully !`,
      placement
    });
  };

  const handleIsEdit = (prev) => {
    setIsEdit(prev);
  };

  const handleEditInfo = (infoMember) => {
    handleUpdateCardData(infoMember);
    handleIsEdit(true);
    handleIsOpenModal();
  };

  const handleDeleteMember = (idMember) => {
    axiosInstance
      .delete(`/TABLE_ROWS/${idMember}`)
      .then(() => {
        handleUpdateCardData({});
        showToastDeleteSuccess();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (cardData && cardData.name) {
      if (cardData.date) {
        cardData.date = dayjs(cardData.date).format("YYYY/MM/DD");
      }
      if (cardData.id) {
        axiosInstance
          .put(`/TABLE_ROWS/${cardData.id}`, cardData)
          .then((response) => {
            console.log("Phản hồi từ máy chủ:", response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        cardData["id"] = (listMember.length + 1).toString();
        axiosInstance
          .post("/TABLE_ROWS", cardData)
          .then((response) => {
            console.log("Phản hồi từ máy chủ:", response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
    axiosInstance
      .get("/TABLE_ROWS")
      .then((res) => setListMember(res.data))
      .catch((err) => console.log(err));
  }, [cardData]);

  return (
    <tbody>
      <ModalAddMember
        isEdit={isEdit}
        handleIsEdit={handleIsEdit}
      ></ModalAddMember>
      {contextHolder}
      {listMember.map((item, index) => {
        return (
          <ToDoItem
            key={item.id}
            listMember={listMember}
            item={item}
            index={index}
            onEditInfo={handleEditInfo}
            onDeleteMember={handleDeleteMember}
          />
        );
      })}
    </tbody>
  );
};

export default ToDoContainer;
