import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axios } from "@/utils/Httputil";
import Router from "next/router";
const login = async (params: any) => {
  console.log("params", params);
  const response = await axios.post("/user/login", params).then((res: any) => {
    localStorage.setItem("x_access_token", res.data.accessToken);
    if (res.code == 0) {
      Router.push("/");
    }
    return res;
  });
  return response.data;
};

const useLogin = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError, error, data } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      queryClient.invalidateQueries();
    }
  });
  return { mutate, isLoading, isError, error, data };
};

export { useLogin, login };
