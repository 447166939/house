import { useQuery } from "@tanstack/react-query";
import { axios } from "@/utils/Httputil";
const queryState = async (countryId: string) => {
  const response = await axios.get("/common/area/states/" + countryId);
  return response.data;
};

const useQueryState = (countryId: string) => {
  const { data, isLoading, isError, error } = useQuery(
    ["state", countryId],
    () => queryState(countryId),
    { enabled: false }
  );
  return { data, isLoading, isError, error };
};

export { useQueryState, queryState };
