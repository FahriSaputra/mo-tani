import { PrimaryButton } from "../components";
import MainLayout from "../layout/MainLayout";
import { useGetCheckout } from "../hooks/queries/Checkout.queries";
import {
  useCancelCheckout,
  useConfirmCheckout,
} from "../hooks/mutations/Checkout.mutations";
import { useCallback } from "react";
import { queryClient } from "../App";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const { data, refetch } = useGetCheckout();
  const checkout = data?.data?.data;

  const cancelCheckout = useCancelCheckout();
  const confirmCheckout = useConfirmCheckout();

  const onCancelCheckout = useCallback(
    (id) => {
      cancelCheckout.mutate(id, {
        onSuccess: () => {
          queryClient.invalidateQueries("all-checkout");
        },
        onError: () => {
          window.alert("Error, Please try again later");
        },
      });
    },
    [cancelCheckout]
  );

  const onConfirmCheckout = useCallback(
    (id) => {
      console.log(id, "id Mutation");
      confirmCheckout.mutate(id, {
        onSuccess: () => {
          queryClient.invalidateQueries("all-checkout");
        },
        onError: () => {
          window.alert("Error, Please try again later");
        },
      });
    },
    [confirmCheckout]
  );

  const onAddProduct = useCallback(() => {
    navigate("/add-product");
  }, [navigate]);
  console.log(data, "Data");
  return (
    <MainLayout>
      <div className="flex row justify-between items-center mt-5">
        <h1 className="text-2xl font-bold text-center">Dashboard</h1>
        <div>
          <PrimaryButton onClick={onAddProduct} title="Add Product" />
        </div>
      </div>

      <table class="border-collapse border border-gray-400 w-full mt-5 mb-10">
        <thead>
          <tr>
            <th class="border border-yellow-500 bg-yellow-500">id</th>
            <th class="border border-yellow-500 bg-yellow-500">Name</th>
            <th class="border border-yellow-500 bg-yellow-500">Proof</th>
            <th class="border border-yellow-500 bg-yellow-500 w-64">
              Detail User
            </th>
            <th class="border border-yellow-500 bg-yellow-500">Product Name</th>
            <th class="border border-yellow-500 bg-yellow-500">Total</th>
            <th class="border border-yellow-500 bg-yellow-500">Quantity</th>
            <th class="border border-yellow-500 bg-yellow-500">Status</th>
            <th class="border border-yellow-500 bg-yellow-500">Action</th>
          </tr>
        </thead>
        <tbody>
          {checkout?.map((item, index) => (
            <tr>
              <td class="border border-gray-300 text-center">{index + 1}</td>
              <td class="border border-gray-300 text-center">
                {item?.fullname}
              </td>
              <td class="border border-gray-300">
                <div className="flex justify-center">
                  <img
                    src={`http://127.0.0.1:8000/storage/images/${item?.proof}`}
                    alt={item?.name}
                    className="w-24"
                  />
                </div>
              </td>
              <td class="border border-gray-300 text-center">
                {item?.handphone} / {item?.address}
              </td>
              <td class="border border-gray-300 text-center">{item?.name}</td>
              <td class="border border-gray-300 text-cente">{item?.total}</td>
              <td class="border border-gray-300 text-center">
                {item?.quantity}
              </td>
              <td
                class={`border border-gray-300 text-center ${
                  item?.status === "waiting"
                    ? "text-yellow-300"
                    : item?.status.toLowerCase() === "success"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {item?.status}
              </td>
              <td class="border border-gray-300 text-center">
                {item?.status === "waiting" ? (
                  <div className="p-3">
                    <PrimaryButton
                      title="Cancel"
                      onClick={() => onCancelCheckout(item?.id)}
                    />
                    <div className="h-4" />
                    <PrimaryButton
                      title="Accept"
                      onClick={() => onConfirmCheckout(item?.id)}
                    />
                  </div>
                ) : (
                  <p>Done</p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </MainLayout>
  );
};

export default Dashboard;
