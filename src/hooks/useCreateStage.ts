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
