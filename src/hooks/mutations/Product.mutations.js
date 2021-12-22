import { useMutation } from "react-query";
import ProductServices from "../../services/ProductServices";

const useAddProduct = () =>
  useMutation((data) =>
    ProductServices.addProduct(data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  );

export { useAddProduct };