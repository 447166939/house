import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "@/utils/Httputil";

const sendSms = async (params: any) => {
  const response = await axios.post("/common/sms/sendCode", params);
  return response.data;
};

const useSendsms = () => {
  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: sendSms,
    onSuccess: (data, variables) => {}
  });
  return { mutate, isLoading, isError, error };
};

export { useSendsms, sendSms };
