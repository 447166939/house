import { useQuery } from "@tanstack/react-query";
import { axios } from "@/utils/Httputil";
const queryChannels = async ({ projectId }: any) => {
  const response = await axios.post("/project/channelList", { project_id: projectId });
  return response.data;
};

const useChannels = ({ projectId }: any) => {
  const { data, isLoading, isError, error } = useQuery(
    ["channels", projectId],
    () => queryChannels({ projectId }),
    { enabled: false }
  );
  return { data, isLoading, isError, error };
};

export { useChannels, queryChannels };
