import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ToDoContext = createContext();

export const TodoProvider = ({ children }) => {
  const defaultObj = {
    name: "",
    email: "",
    job: "",
    status: true,
    date: null
  };
  const [cardData, setCardData] = useState(defaultObj);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleUpdateCardData = (newData) => {
    setCardData(newData);
  };

  const handleIsOpenModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  return (
    <ToDoContext.Provider
      value={{
        cardData,
        handleUpdateCardData,
        isOpenModal,
        handleIsOpenModal
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useToDoContext = () => {
  return useContext(ToDoContext);
};
