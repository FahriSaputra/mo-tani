import ApiHelpers, { setHeader } from "../helpers/ApiHelpers";

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

const ProductServices = {
  getProducts,
  getDetailProduct,
  addProduct,
};

export default ProductServices;
