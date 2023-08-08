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
    onSuccess: () => {
      queryClient.invalidateQueries(["channels", projectId]);
    }
  });
  return { mutate, isLoading, isError, error };
};

export { useCreatechannel, createChannel };
