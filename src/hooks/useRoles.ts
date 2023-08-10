import { useQuery } from "@tanstack/react-query";
import { axios } from "@/utils/Httputil";
const queryRoles = async () => {
    const response = await axios.get("/role/list");
    return response.data;
};

const useQueryRoles = () => {
    const { data, isLoading, isError, error } = useQuery(["roles"], queryRoles, {
        enabled: false
    });
    return { data, isLoading, isError, error };
};

export { useQueryRoles, queryRoles };
