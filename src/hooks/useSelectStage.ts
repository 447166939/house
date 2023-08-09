import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "@/utils/Httputil";

const select = async (params: any) => {
  const response = await axios.post("/project/processSelect", params);
  return response.data;
};

const useSelectStage = ({ projectId }: any) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: select,
    onSuccess: (data, variables) => {
      queryClient.setQueryData(["projectInfo", projectId], (preData: any) => {
        const stage_id = variables.stage_id;
        preData.stageSelect[stage_id] = variables.select;
        return preData;
      });
    }
  });
  return { mutate, isLoading, isError, error };
};

export { useSelectStage, select };
