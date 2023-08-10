import { useQuery } from "@tanstack/react-query";
import { axios } from "@/utils/Httputil";
const queryCity = async (stateId: string) => {
  const response = await axios.get("/common/area/cities/" + stateId);
  return response.data;
};

const useQueryCity = (stateId: string) => {
  const { data, isLoading, isError, error } = useQuery(
    ["cities", stateId],
    () => queryCity(stateId),
    { enabled: false }
  );
  return { data, isLoading, isError, error };
};

export { useQueryCity, queryCity };
