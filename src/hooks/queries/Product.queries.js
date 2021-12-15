import { useQuery } from "react-query";
import ProductServices from "../../services/ProductServices";

export const useGetProducts = () =>
  useQuery(["products"], ProductServices.getProducts);
