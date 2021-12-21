import axios from "axios";

const ApiHelpers = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  // headers: {
  //   "Content-Type": "multipart/form-data",
  // },
});

export const setAuthToken = (token) => {
  if (token) {
    ApiHelpers.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    ApiHelpers.defaults.headers.common["Content-Type"] = "multipart/form-data";
  } else {
    delete ApiHelpers.defaults.headers.common["Authorization"];
    delete ApiHelpers.defaults.headers.common["Content-Type"];
  }
};

export const setHeader = (name, value) => {
  if (name && value) {
    ApiHelpers.defaults.headers.post["Content-Type"] = "multipart/form-data";
    console.log(ApiHelpers.defaults.headers, "headers");
  } else {
    delete ApiHelpers.defaults.headers.post["Content-Type"];
  }
};

export default ApiHelpers;
