import { useContext } from "react";
import MainLayout from "../layout/MainLayout";
import { useGetCheckout } from "../hooks/queries/Checkout.queries";
import { UserContext } from "../context/UserContext";

const CheckoutStatus = () => {
  const [state] = useContext(UserContext);
  const { data } = useGetCheckout();
  const checkout = data?.data?.data.filter(
    (item) => item?.user_id === state?.user.id
  );

  return (
    <MainLayout>
      <div className="mt-5">
        <h1 className="text-2xl font-bold text-center">Checkout Status</h1>
        <div className="filter drop-shadow-lg bg-white rounded-xl mt-5">
          <div className="p-5">
            <h2 className="font-bold text-xl">NOTES: </h2>
            <p className="text-yellow-300">
              Status Waiting = Admin is checking your payment
            </p>
            <p className="text-red-500">
              Status Failed = Admin refuses payment, admin will contact you to
              confirm payment
            </p>
            <p className="text-green-500">
              Status Success = Admin accepts payment and will contact you to
              ensure borrowing goods
            </p>
          </div>
        </div>
      </div>
      <div className="overflow-scroll lg:w-full">
        <table class="border-collapse border border-gray-400 w-full mt-5 mb-10">
          <thead>
            <tr>
              <th class="border border-yellow-500 bg-yellow-500">id</th>
              <th class="border border-yellow-500 bg-yellow-500">
                Product Image
              </th>
              <th class="border border-yellow-500 bg-yellow-500">
                Product Name
              </th>
              <th class="border border-yellow-500 bg-yellow-500">Total</th>
              <th class="border border-yellow-500 bg-yellow-500">Quantity</th>
              <th class="border border-yellow-500 bg-yellow-500">Status</th>
            </tr>
          </thead>
          <tbody>
            {checkout?.map((item, index) => (
              <tr>
                <td class="border border-gray-300 text-center">{index + 1}</td>
                <td class="border border-gray-300">
                  <div className="flex justify-center">
                    <img
                      src={`http://127.0.0.1:8000/storage/images/${item?.image}`}
                      alt={item?.name}
                      className="w-24"
                    />
                  </div>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
};

export default CheckoutStatus;
