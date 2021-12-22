import ApiHelpers from "../helpers/ApiHelpers";

const Checkout = async (data) => {
  const response = await ApiHelpers.post("/checkout/add", data);
  return response;
};

const CheckoutServices = {
  Checkout,
};

export default CheckoutServices;
