import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Chip, IconButton, Typography } from "@material-tailwind/react";
import { Modal } from "antd";
import PropTypes from "prop-types";
import FooterModal from "./FooterModal";
import { useState } from "react";

const ToDoItem = ({ listMember, item, index, onEditInfo, onDeleteMember }) => {
  const isLast = index === listMember.length - 1;
  const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

  const [isConfirmModal, setIsConfirmModal] = useState(false);

  const handleOpenConfirmModal = (prev) => {
    setIsConfirmModal(prev);
  };

  const handleCancelConfirmModal = () => {
    setIsConfirmModal(false);
  };
  return (
    <>
      <Modal
        title="Confirm delete member"
        open={isConfirmModal}
        onCancel={() => {
          handleCancelConfirmModal();
        }}
        footer={() => (
          <FooterModal
            isFooterConfirm
            onOK={() => {
              handleCancelConfirmModal(), onDeleteMember(item.id);
            }}
            onCancel={() => {
              handleCancelConfirmModal();
            }}
          ></FooterModal>
        )}
      >
        <p>Bạn chắc chắn muốn xóa user này ?</p>
      </Modal>
      <tr key={item.name}>
        <td className={classes}>
          <div className="w-max">{index + 1}</div>
        </td>
        <td className={classes}>
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {item.name}
              </Typography>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal opacity-70"
              >
                {item.email}
              </Typography>
            </div>
          </div>
        </td>
        <td className={classes}>
          <div className="flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {item.job}
            </Typography>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal opacity-70"
            >
              {item.org}
            </Typography>
          </div>
        </td>
        <td className={classes}>
          <div className="w-max">
            <Chip
              variant="ghost"
              size="sm"
              value={
                item.status || item.status === "true" ? "online" : "offline"
              }
              className={`text-base font-medium bg-[#e9e9e9] ${
                item.status || item.status === "true"
                  ? "text-green-500"
                  : "text-blue-500"
              }`}
            />
          </div>
        </td>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {item.date}
          </Typography>
        </td>
        <td className={classes}>
          <IconButton className="wrapper-action flex" variant="text">
            <button
              className="mr-2 p-2 bg-white border-[1px] border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white hover:border-blue-500"
              onClick={() => onEditInfo(item)}
            >
              <PencilIcon className="inline-block h-4" />
            </button>
            <button
              className="p-2 bg-white border-[1px] border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white hover:border-red-500"
              onClick={() => {
                handleOpenConfirmModal(true);
              }}
            >
              <TrashIcon className="inline-block h-4" />
            </button>
          </IconButton>
        </td>
      </tr>
    </>
  );
};

ToDoItem.propTypes = {
  listMember: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onEditInfo: PropTypes.func.isRequired,
  onDeleteMember: PropTypes.func.isRequired
};

export default ToDoItem;
