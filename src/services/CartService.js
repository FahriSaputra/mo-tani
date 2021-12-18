import ApiHelpers from "../helpers/ApiHelpers";

const addToCart = async (data) => {
  const response = await ApiHelpers.post("/cart/add", data);
  return response;
};

const CartServices = {
  addToCart,
};

export default CartServices;
