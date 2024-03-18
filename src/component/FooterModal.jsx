import PropTypes from "prop-types";
import { useCardContext } from "../layout/CardProvider";

const FooterModal = ({ onOK, onCancel }) => {
  const { isEdit } = useCardContext();
  return (
    <div className="flex justify-end items-center pr-5">
      <button
        className="inline-flex font-semibold py-1 px-2 rounded-lg border-[1px] border-solid border-black hover:bg-cyan-500"
        onClick={() => onCancel()}
      >
        Cancel
      </button>
      <button
        className="inline-flex font-semibold py-1 px-2 rounded-lg border-[1px] border-solid border-black ml-4 hover:bg-cyan-500"
        onClick={() => onOK()}
      >
        {isEdit ? (
          "Edit member"
        ) : (
          <>
            <svg
              className="me-1 -ms-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            Add new member
          </>
        )}
      </button>
    </div>
  );
};

FooterModal.propTypes = {
  onOK: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default FooterModal;
