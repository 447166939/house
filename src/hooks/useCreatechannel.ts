import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "@/utils/Httputil";

const createChannel = async (params: any) => {
  const response = await axios.post("/project/channelCreate", params);
  return response.data;
};

const useCreatechannel = ({ projectId }: any) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: createChannel,
    onSuccess: (data, variables) => {
      queryClient.setQueryData(["channels", projectId], (preData: any) => {
        preData.list.push({ channel_name: variables.channel_name, channel_id: data.channelId });
        return preData;
      });
    }
  });
  return { mutate, isLoading, isError, error };
};

export { useCreatechannel, createChannel };
