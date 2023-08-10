import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "@/utils/Httputil";

const createStage = async (params: any) => {
  const response = await axios.post("/project/processStageAdd", params);
  return response.data;
};

const useCreateStage = ({ projectId }: any) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: createStage,
    onSuccess: (data, variables) => {
      queryClient.setQueryData(["projects"], (preData: any) => {
        const project = preData.list.find((pro: any) => pro.project_id === projectId);
        if (project) {
          project.process_config.process_stage?.[variables.process_id].push(data.stage_id);
          project.process_config.stage_name[data.stage_id] = variables.stage_name;
        }
        console.log("data===", data);
        console.log("variable===", variables);
        console.log("predata===", preData);
        return preData;
      });
    }
  });
  return { mutate, isLoading, isError, error };
};

export { useCreateStage, createStage };
