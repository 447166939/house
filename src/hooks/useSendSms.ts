import { useQuery } from "@tanstack/react-query";
import { axios } from "@/utils/Httputil";

const sendSms = async (params: any) => {
  const response = await axios.post("/common/sms/sendCode", params);
  return response.data;
};

const useSendsms = () => {
  const { data, isLoading, isError, error } = useQuery(["sendsms"], sendSms, {
    enabled: false,
    staleTime: 0
  });
  return { data, isLoading, isError, error };
};

export { useSendsms, sendSms };
