import { useMutation } from "react-query";
import AuthServices from "../../services/AuthServices";

const useLogin = () => useMutation(AuthServices.login);

const useLogout = () => useMutation(AuthServices.logout);

const useRegister = () => useMutation(AuthServices.register);

export { useLogin, useLogout, useRegister };
