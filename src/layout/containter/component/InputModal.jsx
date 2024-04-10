import PropTypes from "prop-types";

const InputModal = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  isRequired
}) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return (
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        type="text"
        name={name}
        id={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        placeholder={placeholder}
        required
      />
      {isRequired &&
        (!value ? (
          <p className="text-red-500">{`*Trường "${name}" là trường bắt buộc`}</p>
        ) : name === "email" && !emailRegex.test(value) ? (
          <p className="text-red-500">
            {"*Vui lòng nhập đúng định dạng email"}
          </p>
        ) : (
          ""
        ))}
    </>
  );
};

InputModal.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  isRequired: PropTypes.bool.isRequired
};

export default InputModal;
