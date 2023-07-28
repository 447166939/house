import { useMutation, useQuery } from "@tanstack/react-query";
import { axios } from "@/utils/Httputil";

const register = async (params: any) => {
  console.log("params", params);
  const response = await axios.post("/user/register", params);
  return response.data;
};

const useRegister = () => {
  const { mutate, isLoading, isError, error } = useMutation(register);
  return { mutate, isLoading, isError, error };
};

export { useRegister, register };
