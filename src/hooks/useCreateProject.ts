import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "@/utils/Httputil";

const createProject = async (params: any) => {
  console.log("params", params);
  const response = await axios.post("/project/create", params);
  return response.data;
};

const useCreateProject = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError, error, isSuccess, data } = useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"]);
    }
  });
  return { mutate, isLoading, isError, error, isSuccess, data };
};

export { useCreateProject, createProject };
