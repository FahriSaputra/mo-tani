import axios from "axios";

const ApiHelpers = axios.create({
  //only for testing
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default ApiHelpers;
