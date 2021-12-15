import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

//Layout
import { PrimaryButton, TextInput } from "../components";
import { useRegister } from "../hooks/mutations/Auth.mutations";
import MainLayout from "../layout/MainLayout";

const Register = () => {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    address: "",
    handphone: "",
    role: "user",
  });
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();
  const register = useRegister();

  const onChangeText = useCallback(
    (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setForm({ ...form, [name]: value });
    },
    [form]
  );

  const onChangePasswordConfirmation = useCallback((e) => {
    const value = e.target.value;
    setPasswordConfirmation(value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      if (passwordConfirmation !== form.password) {
        window.alert("Password tidak sama");
        setPasswordConfirmation("");
        setForm({ ...form, password: "" });
      } else {
        register.mutate(form, {
          onSuccess: () => {
            window.alert("Berhasil buat akun");
            navigate("/");
          },
          onError: () => {
            window.alert("Gagal buat akun");
          },
        });
      }
      e.preventDefault();
    },
    [form, passwordConfirmation]
  );

  return (
    <MainLayout className="bg-gray-200">
      <div className="flex justify-center items-center bg-gray-200 my-5">
        <div className="bg-white p-4 rounded w-9/12 sm:w-1/2 lg:w-96 filter drop-shadow-lg">
          <h1 className="mb-5 font-semibold text-xl">Register</h1>
          <form onSubmit={onSubmit}>
            <TextInput
              label="Email"
              placeholder="jhondoe@mail.com"
              name="email"
              value={form.email}
              onChange={onChangeText}
            />
            <TextInput
              label="Full Name"
              containerStyle="mt-4"
              placeholder="jhon doe"
              name="fullname"
              value={form.fullname}
              onChange={onChangeText}
            />
            <TextInput
              label="Password"
              containerStyle="mt-4"
              type="password"
              placeholder="********"
              name="password"
              value={form.password}
              onChange={onChangeText}
            />
            <TextInput
              label="Confirm Password"
              containerStyle="mt-4"
              type="password"
              placeholder="********"
              value={passwordConfirmation}
              onChange={onChangePasswordConfirmation}
            />
            <TextInput
              label="Phone Number"
              containerStyle="mt-4"
              type="number"
              name="handphone"
              placeholder="089xxxxx"
              value={form.handphone}
              onChange={onChangeText}
            />
            <TextInput
              label="Address"
              containerStyle="mt-4"
              name="address"
              placeholder="eg: jakarta"
              value={form.address}
              onChange={onChangeText}
            />
            <p className="text-xs mt-1 text-yellow-500">
              *enter the complete address as possible for delivery
            </p>
            <div className="flex justify-end">
              <div className="mt-5 md:w-32">
                <PrimaryButton title="Register" type="submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
