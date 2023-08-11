import { useMutation} from "@tanstack/react-query";
import { axios } from "@/utils/Httputil";

const sendEmail = async (params: any) => {
    const response = await axios.post("/common/email/sendCode", params);
    return response.data;
};

const useSendEmail = () => {
    const { mutate, isLoading, isError, error } = useMutation({
        mutationFn: sendEmail,
        onSuccess: (data, variables) => {

        }
    });
    return { mutate, isLoading, isError, error };
};

export { useSendEmail, sendEmail };
