import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const CardContext = createContext();

export const TodoProvider = ({ children }) => {
  const [cardData, setCardData] = useState({
    name: "",
    email: "",
    job: "",
    status: true,
    date: null,
    img: null
  });
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const updateCardData = (newData) => {
    setCardData(newData);
  };

  const handleIsOpenModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  const handleIsEdit = (prev) => {
    setIsEdit(prev);
  };

  return (
    <CardContext.Provider
      value={{
        cardData,
        updateCardData,
        isOpenModal,
        handleIsOpenModal,
        isEdit,
        handleIsEdit
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useCardContext = () => {
  return useContext(CardContext);
};
