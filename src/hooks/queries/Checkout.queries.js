import { useQuery } from "react-query";
import CheckoutServices from "../../services/CheckoutServices";

export const useGetCheckout = () =>
  useQuery(["all-checkout"], CheckoutServices.getCheckouts);
