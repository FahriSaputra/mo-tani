import { memo } from "react";
import { PrimaryButton } from "./index";

const CardProduct = memo((props) => {
  const { onClick } = props;

  return (
    <div className="w-full rounded-lg hover:border hover:border-black">
      <div className="relative">
        <img
          className="w-full"
          src="https://www.yanmar.com/ltc/id/agri/img/8b2fe22490/img_index_01.jpg"
          alt="traktor"
        />
        <div className="absolute left-0 top-0 bg-yellow-300 rounded-r-3xl flex items-center">
          <span className="pr-3 pl-1 py-1 text-sm">Populer</span>
        </div>
      </div>
      <div className="p-2 mt-3">
        <h1 className="text-base mb-2">Traktor</h1>
        <p className="text-sm text-yellow-500">Rp. 50.000</p>

        <PrimaryButton title="Rent" onClick={onClick} />
      </div>
    </div>
  );
});

export default CardProduct;
