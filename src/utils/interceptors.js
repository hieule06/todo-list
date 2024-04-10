import axiosInstance from "../services/api";

const interceptors = axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error.message);
    return Promise.reject(error.message);
  }
);

/* axiosInstance.interceptors.response.use(
  (response) => {
    if (response) {
      if (response.config && response.config.method === "delete") {
        handleUpdateCardData({});
        showToastDeleteSuccess();
      } else if (response.data) {
        setListMember(response.data);
      }
    }
  },
  (error) => {
    console.log(error.message);
    return Promise.reject(error.message);
  }
); */

export default interceptors;
