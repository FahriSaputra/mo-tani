import { memo } from "react";

const PrimaryButton = memo((props) => {
  const { title, onClick } = props;

  return (
    <button
      className="min-w-full bg-yellow-500 px-2 py-1 text-sm md:text-base"
      onClick={onClick}
    >
      {title}
    </button>
  );
});

export default PrimaryButton;
