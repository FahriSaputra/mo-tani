import { memo, useCallback, useEffect, useState } from "react";

const ButtonCounter = memo((props) => {
  const {
    initialValue = 1,
    onIncrement,
    onDecrement,
    disabled,
    enableOne,
    maxValue,
  } = props;
  const [value, setValue] = useState(1);

  useEffect(() => setValue(initialValue), [initialValue]);

  const _onIncrement = useCallback(() => {
    setValue(value + 1);
    onIncrement(value + 1);
  }, [onIncrement, value]);

  const _onDecrement = useCallback(() => {
    setValue(value - 1);
    onDecrement(value - 1);
  }, [onDecrement, value]);

  return (
    <div className="flex">
      <button
        className="w-6 bg-yellow-300 disabled:opacity-10"
        disabled={(!enableOne && value <= 1) || disabled}
        onClick={_onDecrement}
      >
        -
      </button>
      <div className="w-10 border flex justify-center align-center">
        <p>{value}</p>
      </div>
      <button
        className="w-6 bg-yellow-500 disabled:opacity-10"
        onClick={_onIncrement}
        disabled={value >= maxValue}
      >
        +
      </button>
    </div>
  );
});

export default ButtonCounter;
