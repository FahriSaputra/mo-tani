import { memo } from "react";

const TextInput = memo((props) => {
  const { label, placeholder, containerStyle } = props;
  return (
    <div className={`flex flex-col ${containerStyle}`}>
      {label && (
        <label className="mb-3" for={label}>
          {label}
        </label>
      )}
      <input
        {...props}
        className="border border-gray-400 rounded w-100 focus:ring-2 focus:ring-yellow-500 focus:outline-none focus:border-transparent"
        placeholder={placeholder}
        id={label}
      />
    </div>
  );
});

export default TextInput;
