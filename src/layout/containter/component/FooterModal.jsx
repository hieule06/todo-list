import PropTypes from "prop-types";
import BtnCancel from "../../../core/component/BtnCancel";
import BtnEdit from "../../../core/component/BtnEdit";

const FooterModal = ({ isFooterConfirm, isEdit, onOK, onCancel }) => {
  return (
    <div className="flex justify-end items-center pr-5">
      <BtnCancel onCancel={onCancel}></BtnCancel>
      <BtnEdit
        isFooterConfirm={isFooterConfirm}
        isEdit={isEdit}
        onOK={onOK}
      ></BtnEdit>
    </div>
  );
};

FooterModal.propTypes = {
  isEdit: PropTypes.bool.isRequired,
  isFooterConfirm: PropTypes.bool.isRequired,
  onOK: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default FooterModal;
