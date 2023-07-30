import { useMutation, useQuery,useQueryClient } from "@tanstack/react-query";
import { axios } from "@/utils/Httputil";
import qs from "qs";

const login = async (params: any) => {
    console.log("params", params);
    const response = await axios.post("/user/login", qs.stringify(params)).then((res)=>{
        localStorage.setItem('x_access_token',res.data.accessToken);
        return res;
    });
    return response.data;
};

const useLogin = () => {
    const queryClient=useQueryClient()
    const { mutate, isLoading, isError, error,data } = useMutation({mutationFn:login,onSuccess:()=>{
queryClient.invalidateQueries()
        }});
    return { mutate, isLoading, isError, error,data };
};

export { useLogin,login };
