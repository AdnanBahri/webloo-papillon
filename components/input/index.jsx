import cx from "classnames";

const Input = ({
  type,
  name,
  placeholder,
  value,
  setValue,
  error,
  touched,
  onBlur,
}) => {
  return (
    <div className="w-full">
      <input
        type={type}
        name={name}
        className={cx(
          "w-full px-6 py-3 border-white border-[2px] rounded-full bg-transparent focus:ring-0 outline-none placeholder-gray-200",
          error && touched && "border-red-500"
        )}
        placeholder={placeholder}
        value={value}
        onChange={setValue}
        required
        onBlur={onBlur}
      />
      {error && touched && (
        <p className="mt-2 ml-2 text-sm text-red-500 ease-in duration-200">
          {error}.
        </p>
      )}
    </div>
  );
};

export default Input;
