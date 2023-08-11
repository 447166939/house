import { useQuery } from "@tanstack/react-query";
import { axios } from "@/utils/Httputil";
const queryLogintype = async () => {
    const response = await axios.get("/oauth");
    return response.data;
};

const useQueryLogintype = () => {
    const { data, isLoading, isError, error } = useQuery(
        ["loginType"],
        queryLogintype,
        { enabled: false }
    );
    return { data, isLoading, isError, error };
};

export { useQueryLogintype, queryLogintype };
