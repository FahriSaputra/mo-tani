import { useQuery } from "react-query";
import CartServices from "../../services/CartService";

export const useGetUserCart = () =>
  useQuery(["cart"], CartServices.getUserCart);
