import { useQuery } from "react-query";
import TestServices from "../../services/TestServices";

export const useGetUsers = () => useQuery(["users"], TestServices.getUsers);
