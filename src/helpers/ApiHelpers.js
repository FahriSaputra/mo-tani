import axios from "axios";

const ApiHelpers = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

export const setAuthToken = (token) => {
  if (token) {
    ApiHelpers.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete ApiHelpers.defaults.headers.common["Authorization"];
  }
};

export default ApiHelpers;
