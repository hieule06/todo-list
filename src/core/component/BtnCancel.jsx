import PropTypes from "prop-types";

const BtnCancel = ({ onCancel }) => {
  return (
    <button
      className="inline-flex font-semibold py-1 px-2 rounded-lg border-[1px] border-solid border-black hover:bg-cyan-500"
      onClick={() => onCancel()}
    >
      Cancel
    </button>
  );
};

BtnCancel.propTypes = {
  onCancel: PropTypes.func.isRequired
};

export default BtnCancel;
