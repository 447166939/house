import { useMutation, useQuery,useQueryClient } from "@tanstack/react-query";
import { axios } from "@/utils/Httputil";
import qs from "qs";

const register = async (params: any) => {
  console.log("params", params);
  const response = await axios.post("/user/register", qs.stringify(params))
      .then((res)=>{
        localStorage.setItem('x_access_token',res.data.accessToken);
        return res;
      });
  return response.data;
};

const useRegister = () => {
  const queryClient=useQueryClient();
  const { mutate, isLoading, isError, error } = useMutation({mutationFn:register,
    onSuccess:()=>{queryClient.invalidateQueries()}});
  return { mutate, isLoading, isError, error };
};

export { useRegister, register };
