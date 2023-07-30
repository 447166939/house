import { useMutation, useQuery } from "@tanstack/react-query";
import { axios } from "@/utils/Httputil";
import qs from "qs";

const register = async (params: any) => {
  console.log("params", params);
  const response = await axios.post("/user/register", qs.stringify(params));
  return response.data;
};

const useRegister = () => {
  const { mutate, isLoading, isError, error } = useMutation(register);
  return { mutate, isLoading, isError, error };
};

export { useRegister, register };
