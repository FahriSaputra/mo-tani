import ApiHelpers from "../helpers/ApiHelpers";

const getProducts = async () => {
  const response = await ApiHelpers.get("/list");
  return response;
};

const getDetailProduct = async (slug) => {
  const response = await ApiHelpers.get(`/product/${slug}`);
  return response;
};

const addProduct = async (data, config) => {
  const response = await ApiHelpers.post("/product/add", data, config);
  return response;
};

const deleteProduct = async (id) =>
  await ApiHelpers.delete(`/product/delete/${id}`);

const ProductServices = {
  getProducts,
  getDetailProduct,
  addProduct,
  deleteProduct,
};

export default ProductServices;
