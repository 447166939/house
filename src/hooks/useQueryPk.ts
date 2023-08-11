import { useQuery } from "@tanstack/react-query";
import { axios } from "@/utils/Httputil";
const queryPk = async () => {
    const response = await axios.post("/user/login/pk");
    return response.data;
};

const useQueryPk = () => {
    const { data, isLoading, isError, error } = useQuery(
        ["pk"],
        queryPk,
        { enabled: false,staleTime:0 }
    );
    return { data, isLoading, isError, error };
};

export { useQueryPk, queryPk };
