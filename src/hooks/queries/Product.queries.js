import { useQuery } from "react-query";
import ProductServices from "../../services/ProductServices";

export const useGetProducts = () =>
  useQuery(["products"], ProductServices.getProducts);

export const useGetDetailProduct = (slug) =>
  useQuery(["detail-product", slug], () =>
    ProductServices.getDetailProduct(slug)
  );
