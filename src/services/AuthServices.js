import ApiHelpers from "../helpers/ApiHelpers";

const login = async (data) => {
  const response = await ApiHelpers.post("/login", data);
  return response;
};

const logout = async () => await ApiHelpers.post("/user/logout");

const register = async (data) => await ApiHelpers.post("/register", data);

const AuthServices = {
  login,
  logout,
  register,
};

export default AuthServices;
