import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "@/utils/Httputil";

const createProcess = async (params: any) => {
  const response = await axios.post("/project/processAdd", params);
  return response.data;
};

const useCreateProcess = ({ projectId }: any) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: createProcess,
    onSuccess: (data, variables) => {
      queryClient.setQueryData(["projects"], (preData: any) => {
        const project = preData.list.find((pro: any) => pro.project_id === projectId);
        if (project) {
          project.process_config.process_list.push(data.process_id);
          project.process_config.process_name[data.process_id] = data.process_name;
        }
        return preData;
      });
    }
  });
  return { mutate, isLoading, isError, error };
};

export { useCreateProcess, createProcess };
