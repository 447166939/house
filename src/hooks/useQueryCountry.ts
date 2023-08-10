import { useQuery } from "@tanstack/react-query";
import { axios } from "@/utils/Httputil";
const queryCountries = async () => {
    const response = await axios.get("/common/area/countries");
    return response.data;
};

const useQueryCountries = () => {
    const { data, isLoading, isError, error } = useQuery(
        ["countries"],
        queryCountries,
        { enabled: false }
    );
    return { data, isLoading, isError, error };
};

export { useQueryCountries, queryCountries };
