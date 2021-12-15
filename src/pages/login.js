import { useCallback, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

//Layout
import { PrimaryButton, TextInput } from "../components";
import MainLayout from "../layout/MainLayout";

import { useLogin } from "../hooks/mutations/Auth.mutations";
import { setAuthToken } from "../helpers/ApiHelpers";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const login = useLogin();
  const [, dispatch] = useContext(UserContext);

  const navigate = useNavigate();

  const onChangeText = useCallback(
    (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setForm({ ...form, [name]: value });
    },
    [form]
  );

  const onSubmit = (e) => {
    console.log("pressed");
    login.mutate(form, {
      onSuccess: (data) => {
        console.log(data, "data login");
        localStorage.setItem("token", data?.data?.token);
        dispatch({
          type: "LOGIN",
          payload: data,
        });
        setAuthToken(data?.data?.token);
        navigate("/");
      },
      onError: () => window.alert("error"),
    });
    e.preventDefault();
  };

  return (
    <MainLayout className="bg-gray-200">
      <div className="flex justify-center items-center bg-gray-200 h-screen">
        <div className="bg-white p-4 rounded w-9/12 sm:w-1/2 lg:w-96 filter drop-shadow-lg">
          <h1 className="mb-5 font-semibold text-xl">Login</h1>
          <form onSubmit={onSubmit}>
            <TextInput name="email" label="Email" onChange={onChangeText} />
            <TextInput
              name="password"
              label="Password"
              type="password"
              onChange={onChangeText}
              containerStyle="mt-5"
            />
            <div className="flex justify-end">
              <div className="mt-5 md:w-32">
                <PrimaryButton title="Login" type="submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
