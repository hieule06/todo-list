import { notification } from "antd";

const [api, contextHolder] = notification.useNotification();

export const showToast = (placement) => {
  switch (placement) {
    case "Delete":
      api.success({
        message: `Delete member successfully !`,
        placement
      });
      break;
    case "Create":
      api.success({
        message: `Create member successfully !`,
        placement
      });
      break;
    case "Edit":
      api.success({
        message: `Edit member successfully !`,
        placement
      });
      break;
    default:
      api.error({
        message: `Error saving !`,
        placement
      });
      break;
  }
};

export { contextHolder };
