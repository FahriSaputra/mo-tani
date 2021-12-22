import { memo, useCallback } from "react";
import { PrimaryButton } from "../components";
import MainLayout from "../layout/MainLayout";
import { useGetUserCart } from "../hooks/queries/Cart.queries";
import { useDeleteFromCart } from "../hooks/mutations/Cart.mutations";
import { queryClient } from "../App";
import { useNavigate } from "react-router-dom";

const CardCart = memo((props) => {
  const { data } = props;
  const deleteFromCart = useDeleteFromCart();
  const navigate = useNavigate();

  const onDelete = useCallback(() => {
    deleteFromCart.mutate(data?.id);
    queryClient.refetchQueries("user");
  }, [data?.id, deleteFromCart]);

  const onCheckout = useCallback(() => {
    navigate("/checkout");
  }, [navigate]);

  return (
    <>
      <div className="flex">
        <img
          className="w-32 mr-3"
          src={`http://127.0.0.1:8000/storage/images/${data?.image}`}
          alt={data?.name}
        />
        <div className="truncate">
          <h1 className="truncate">{data?.title}</h1>
          <p>Total: Rp. {data?.total}</p>
          <p>quantity: {data?.quantity}</p>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="mr-5">
          <PrimaryButton title="Delete" onClick={onDelete} />
        </div>
        <div>
          <PrimaryButton title="Checkout" onClick={onCheckout} />
        </div>
      </div>
    </>
  );
});

const Cart = () => {
  const getUserCart = useGetUserCart();
  const dataCart = getUserCart?.data?.data?.data;

  return (
    <MainLayout>
      <div className="mt-3 px-3">
        <h1 className="font-bold text-2xl mb-3">Cart</h1>
      </div>

      {getUserCart?.isFetching || getUserCart?.isLoading ? (
        <p>Loading...</p>
      ) : (
        dataCart?.map((item, index) => <CardCart key={index} data={item} />)
      )}
    </MainLayout>
  );
};

export default Cart;
