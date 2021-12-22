import { useCallback, useState } from "react";
import MainLayout from "../layout/MainLayout";
import { PrimaryButton, TextInput } from "../components";
import { useLocation } from "react-router-dom";
import { useCheckout } from "../hooks/mutations/Checkout.mutations";
import { useNavigate } from "react-router-dom";
import { useDeleteFromCart } from "../hooks/mutations/Cart.mutations";

const Checkout = () => {
  const [form, setForm] = useState({
    proof: "",
  });

  const { state } = useLocation();
  const checkout = useCheckout();
  const deleteFromCart = useDeleteFromCart();
  const navigate = useNavigate();

  const onChange = useCallback((e) => {
    const name = e.target.name;
    const value = e.target.type === "file" ? e.target.files : e.target.value;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const onSubmit = useCallback(
    (e) => {
      const formData = new FormData();
      formData.append("cart_id", state?.id);
      formData.append("status", "waiting");
      formData.append("stok", state?.quantity);
      formData.append("proof", form?.proof[0]);
      console.log(formData, "FormData");
      checkout.mutate(formData, {
        onSuccess: () => {
          deleteFromCart.mutate(state?.id);
          window.alert("Payment Success");
          navigate("/");
        },
        onError: () => window.alert("Payment Failed"),
      });
      e.preventDefault();
    },
    [
      checkout,
      deleteFromCart,
      form?.proof,
      navigate,
      state?.id,
      state?.quantity,
    ]
  );

  return (
    <MainLayout>
      <div className="w-full rounded-lg filter drop-shadow-lg bg-white mt-5">
        <div className="p-10">
          <h1 className="text-2xl font-bold">Checkout</h1>
          <div className="mt-3">
            <h1 className="font-semibold">Pay to: </h1>
            <p>Bank Name: Bank BRI</p>
            <p>Bank Account: 201001011430500</p>
            <p>Account Name: Fahri Saputra</p>
            <p>Pay Amount: {state?.total}</p>
          </div>
          <div className="mt-3">
            <TextInput
              name="proof"
              label="Payment Confirmation"
              containerStyle="mt-5"
              type="file"
              onChange={onChange}
            />
            <p className="text-xs mt-1 text-yellow-500">
              *please pay correctly
            </p>
            {form?.proof ? (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img
                src={URL.createObjectURL(form?.proof[0])}
                alt="proof"
                className="w-1/2 h-1/2 mt-3"
              />
            ) : null}
          </div>
          <div className="flex justify-end">
            <div className="w-1/4">
              <PrimaryButton title="Confirm" onClick={onSubmit} />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Checkout;
