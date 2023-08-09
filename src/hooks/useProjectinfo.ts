import { useQuery } from "@tanstack/react-query";
import { axios } from "@/utils/Httputil";

const queryProjectinfo = async (params: any) => {
  const response = await axios.post("/project/projectInfo", params);
  return response.data;
};

const useProjectinfo = ({ projectId }: any) => {
  const { data, isLoading, isError, error } = useQuery(
    ["projectInfo", projectId],
    () => queryProjectinfo({ project_id:projectId }),
    { enabled: false }
  );
  return { data, isLoading, isError, error };
};

export { useProjectinfo, queryProjectinfo };
