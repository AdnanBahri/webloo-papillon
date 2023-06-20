const Input = ({
  type,
  label,
  name,
  placeholder,
  value,
  setValue,
  error,
  touched,
  onBlur,
}) => {
  return (
    <div className="w-full mb-5">
      <label
        htmlFor={name}
        className="block mb-2 mx-1 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        className={cx(
          "bg-gray-50 border-[1px] border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5 ",
          error && touched && "border-red-600"
        )}
        placeholder={placeholder}
        value={value}
        onChange={setValue}
        required
        onBlur={onBlur}
      />
      {error && touched && (
        <p className="mt-2 ml-2 text-sm text-red-600 dark:text-red-500 ease-in duration-500">
          <span className="font-medium">Oh, snapp!</span> {error}.
        </p>
      )}
    </div>
  );
};

export default Input;
