import ApiHelpers from "../helpers/ApiHelpers";

const checkout = async (data) => {
  const response = await ApiHelpers.post("/checkout/add", data);
  return response;
};

const getCheckouts = async () => await ApiHelpers.get("/checkout/list");

const confirmCheckout = async (id) =>
  await ApiHelpers.post(`/checkout/confirm/${id}`);

const cancelCheckout = async (id) =>
  await ApiHelpers.post(`/checkout/cancel/${id}`);

const CheckoutServices = {
  checkout,
  getCheckouts,
  cancelCheckout,
  confirmCheckout,
};

export default CheckoutServices;
