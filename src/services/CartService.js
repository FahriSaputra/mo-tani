import ApiHelpers from "../helpers/ApiHelpers";

const addToCart = async (data) => {
  const response = await ApiHelpers.post("/cart/add", data);
  return response;
};

const getUserCart = async () => await ApiHelpers.get("/cart/list");

const deleteFromCart = async (id) =>
  await ApiHelpers.delete(`/cart/delete/${id}`);

const CartServices = {
  addToCart,
  deleteFromCart,
  getUserCart,
};

export default CartServices;
