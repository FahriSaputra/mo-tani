import { memo, useCallback, useEffect, useState } from "react";
import { PrimaryButton } from "../components";
import MainLayout from "../layout/MainLayout";

const ButtonCounter = memo((props) => {
  const {
    initialValue = 1,
    onIncrement,
    onDecrement,
    disabled,
    enableOne,
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
      <button className="w-6 bg-yellow-500" onClick={_onIncrement}>
        +
      </button>
    </div>
  );
});

const Cart = () => {
  const [value, setValue] = useState(1);
  const onDecrement = useCallback((val) => {
    setValue(val);
  }, []);

  const onIncrement = useCallback((val) => {
    setValue(val);
  }, []);

  return (
    <MainLayout>
      <div className="mt-3 px-3 h-screen">
        <h1 className="font-bold text-2xl mb-3">Cart</h1>
        <div className="flex">
          <img
            className="w-32"
            src="https://www.yanmar.com/ltc/id/agri/img/8b2fe22490/img_index_01.jpg"
            alt="traktor"
          />
          <div className="truncate">
            <h1 className="truncate">
              Mesin Penanam Tebu Pemasang Dripline Terintegrasi
            </h1>
            <p>Rp. 250.000</p>
          </div>
        </div>
        <div className="flex justify-end">
          <ButtonCounter
            initialValue={1}
            onDecrement={onDecrement}
            onIncrement={onIncrement}
          />
        </div>
      </div>
      <div className="sticky bottom-5">
        <p className="pb-3">Total: {250000 * value}</p>
        <PrimaryButton title="Checkout" />
      </div>
    </MainLayout>
  );
};

export default Cart;
