import { useCallback, useState } from "react";

import { useNavigate, useParams } from "react-router";
import { PrimaryButton, ButtonCounter } from "../components";
import MainLayout from "../layout/MainLayout";
import { useGetDetailProduct } from "../hooks/queries/Product.queries";
import { formatIdr } from "../utility/TextUtility";

const ProductDetail = () => {
  const [value, setValue] = useState(0);

  const navigate = useNavigate();
  const params = useParams();
  console.log(params, "params");
  const { data } = useGetDetailProduct(params.id);
  const detailProduct = data?.data?.data;

  console.log(data, "getDetailProduct");
  const onDecrement = useCallback((val) => {
    setValue(val);
  }, []);

  const onIncrement = useCallback((val) => {
    setValue(val);
  }, []);

  return (
    <MainLayout>
      <div className="px-3 my-3">
        <div className="flex flex-col md:flex-row">
          <img
            className="w-full md:w-1/2 md:mr-5"
            src={`http://127.0.0.1:8000/storage/images/${detailProduct.image}`}
            alt="traktor"
          />
          <div>
            <h1 className="text-2xl font-bold mt-3 md-mt-0">
              {detailProduct?.name}
            </h1>

            <h3 className="mt-3">{formatIdr(detailProduct?.price)}</h3>
            <p className="mt-2">Komoditi: {detailProduct?.commodity}</p>
            <p className="mt-2">Sisa: {detailProduct?.stock}</p>

            <div className="mt-3 md:w-1/2 flex flex-row">
              <PrimaryButton title="Rent" onClick={() => navigate("/cart")} />
              <div className="mr-5" />
              <ButtonCounter
                onDecrement={onDecrement}
                onIncrement={onIncrement}
                value={value}
                maxValue={detailProduct.stock}
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-lg mt-5">Detail</h2>
          <h4 className="font-semibold mt-2 mb-2">Spesifikasi</h4>
          <p>{detailProduct?.specification}</p>
          {/* <ul>
            {DUMMY_SPEK.map((spek, i) => (
              <li className="flex">
                <p className="font-bold mr-2">{i + 1}. </p> {spek}
              </li>
            ))}
          </ul> */}
        </div>

        <div className="grid grid-rows-2 mt-5">
          <div>
            <h4 className="mb-3 font-semibold">Kegunaan:</h4>
            <p>{detailProduct?.function}</p>
          </div>

          <div className="mt-3">
            <h4 className="mb-3 font-semibold">Keunggulan:</h4>
            <p>{detailProduct?.utility}</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetail;
