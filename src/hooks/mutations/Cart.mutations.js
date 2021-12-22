import { useMutation } from "react-query";
import CartServices from "../../services/CartService";

const useAddToCart = () => useMutation(CartServices.addToCart);

const useDeleteFromCart = () => useMutation(CartServices.deleteFromCart);

export { useAddToCart, useDeleteFromCart };
