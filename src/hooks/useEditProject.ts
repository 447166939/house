import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "@/utils/Httputil";

const editProject = async (params: any) => {
  const response = await axios.post("/project/projectEdit", params);
  return response.data;
};

const useEditProject = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: editProject,
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"]);
    }
  });
  return { mutate, isLoading, isError, error };
};

export { useEditProject, editProject };
