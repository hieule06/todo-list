import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const CardContext = createContext();

export const CardProvider = ({ children }) => {
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

CardProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useCardContext = () => {
  return useContext(CardContext);
};
