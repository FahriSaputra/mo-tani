import { useCallback, useState, useContext } from "react";

import { useNavigate, useParams } from "react-router";
import { PrimaryButton, ButtonCounter } from "../components";
import MainLayout from "../layout/MainLayout";
import { useGetDetailProduct } from "../hooks/queries/Product.queries";
import { useAddToCart } from "../hooks/mutations/Cart.mutations";
import { useDeleteProduct } from "../hooks/mutations/Product.mutations";
import { formatIdr } from "../utility/TextUtility";
import { UserContext } from "../context/UserContext";
import { queryClient } from "../App";

const ProductDetail = () => {
  const [value, setValue] = useState(1);
  const [state] = useContext(UserContext);

  const navigate = useNavigate();
  const params = useParams();

  const addToCart = useAddToCart();
  const { data } = useGetDetailProduct(params.id);
  const detailProduct = data?.data?.data;
  const deleteProduct = useDeleteProduct();

  const onDecrement = useCallback((val) => {
    setValue(val);
  }, []);

  const onIncrement = useCallback((val) => {
    setValue(val);
  }, []);

  const onRent = useCallback(() => {
    if (!state.isLogin) {
      window.alert("harus login");
    } else {
      addToCart.mutate(
        {
          user_id: state?.user?.id,
          product_id: detailProduct?.id,
          quantity: value,
          duration: 1,
          total: detailProduct?.price * value * 3,
        },
        {
          onSuccess: () => {
            window.alert("Success");
            navigate("/cart");
          },
          onError: () => window.alert("Gagal"),
        }
      );
    }
  }, [
    addToCart,
    detailProduct?.id,
    detailProduct?.price,
    navigate,
    state.isLogin,
    state?.user?.id,
    value,
  ]);

  const onEdit = useCallback(() => {
    navigate("/edit-product", { state: detailProduct });
  }, [detailProduct, navigate]);

  const onDeleteProduct = useCallback(() => {
    deleteProduct.mutate(detailProduct?.id, {
      onSuccess: () => {
        window.alert("Product has been deleted");
        queryClient.invalidateQueries("products");
        navigate("/products");
      },
      onError: () => {
        window.alert("Failed to delete product, try again later");
      },
    });
  }, [deleteProduct, detailProduct?.id, navigate]);

  return (
    <MainLayout>
      <div className="px-3 my-3">
        <div className="flex flex-col md:flex-row">
          <img
            className="w-full md:w-1/2 md:mr-5"
            src={`http://127.0.0.1:8000/storage/images/${detailProduct?.image}`}
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
              {state?.user?.role.toLowerCase() === "admin" ? (
                <div className="flex row">
                  <PrimaryButton title="Edit" onClick={onEdit} />
                  <div className="ml-5 w-16">
                    <PrimaryButton title="Delete" onClick={onDeleteProduct} />
                  </div>
                </div>
              ) : (
                <div className="flex">
                  <PrimaryButton title="Rent" onClick={onRent} />
                  <div className="mr-5" />
                  <ButtonCounter
                    onDecrement={onDecrement}
                    onIncrement={onIncrement}
                    value={value}
                    maxValue={detailProduct?.stock}
                  />
                </div>
              )}
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
