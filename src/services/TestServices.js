import ApiHelpers from "../helpers/ApiHelpers";

const getUsers = async () => {
  const response = await ApiHelpers.get("/users");
  return response;
};

const TestServices = {
  getUsers,
};

export default TestServices;
