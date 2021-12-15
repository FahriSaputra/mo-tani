import ApiHelpers from "../helpers/ApiHelpers";

const getProducts = async () => {
  const response = await ApiHelpers.get("/list");
  return response;
};

const getDetailProduct = async (slug) => {
  const response = await ApiHelpers.get(`/product/${slug}`);
  return response;
};

const ProductServices = {
  getProducts,
  getDetailProduct,
};

export default ProductServices;
