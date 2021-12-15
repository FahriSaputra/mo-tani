import ApiHelpers from "../helpers/ApiHelpers";

const getProducts = async () => {
  const response = await ApiHelpers.get("/list");
  return response;
};

const ProductServices = {
  getProducts,
};

export default ProductServices;
