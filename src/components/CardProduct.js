import { memo, useCallback } from "react";
import { PrimaryButton } from "./index";
import { useNavigate } from "react-router-dom";

const CardProduct = memo((props) => {
  const { product, buttonTitle } = props;
  const { image, name, price, slug, id } = product;
  const navigate = useNavigate();
  const formatPrice = new Intl.NumberFormat("id-ID", {
    maximumSignificantDigits: 3,
  }).format(price);

  const navigateTo = useCallback(() => {
    navigate(`/product/${slug}`);
  }, []);

  return (
    <div className="w-full rounded-lg hover:border hover:border-black">
      <div className="relative">
        <img
          className="w-full"
          src={`http://127.0.0.1:8000/storage/images/${image}`}
          alt="traktor"
        />
        {/* <div className="absolute left-0 top-0 bg-yellow-300 rounded-r-3xl flex items-center">
          <span className="pr-3 pl-1 py-1 text-sm">Populer</span>
        </div> */}
      </div>
      <div className="p-2 mt-3">
        <h1 className="text-base mb-2">{name}</h1>
        <p className="text-sm text-yellow-500">Rp. {formatPrice}</p>

        <PrimaryButton
          title={!buttonTitle ? "Rent" : buttonTitle}
          onClick={navigateTo}
        />
      </div>
    </div>
  );
});

export default CardProduct;
