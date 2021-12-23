import { useMutation } from "react-query";
import CheckoutServices from "../../services/CheckoutServices";

const useCheckout = () =>
  useMutation((data) =>
    CheckoutServices.checkout(data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  );

const useCancelCheckout = () => useMutation(CheckoutServices.cancelCheckout);

const useConfirmCheckout = () => useMutation(CheckoutServices.confirmCheckout);

export { useCheckout, useCancelCheckout, useConfirmCheckout };
