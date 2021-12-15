import { useQuery } from "react-query";
import UserServices from "../../services/UserServices";

export const useGetUser = () =>
  useQuery(["user"], UserServices.getUser, {
    onError: (err) => console.log(err, "err"),
    enabled: false,
  });
