import ApiHelpers from "../helpers/ApiHelpers";

const getUser = async () => {
  const response = await ApiHelpers.get("/user", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

const ProductServices = {
  getUser,
};

export default ProductServices;
