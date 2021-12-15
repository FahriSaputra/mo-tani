import { useCallback, useState } from "react";
import { PrimaryButton, ButtonCounter } from "../components";
import MainLayout from "../layout/MainLayout";

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
