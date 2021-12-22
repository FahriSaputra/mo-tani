import { useMutation } from "react-query";
import CheckoutServices from "../../services/CheckoutServices";

const useCheckout = () =>
  useMutation((data) =>
    CheckoutServices.Checkout(data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  );

export { useCheckout };
