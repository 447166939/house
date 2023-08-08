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
    onSuccess: (data:any,variables) => {
      queryClient.setQueryData(['projects'],(preData:any)=>{
        console.log('predata',preData)
        const project = preData.list.find((pro:any) => pro.project_id === variables.project_id);
        if(project){
          project.project_name=variables.project_name;
        }
        return preData;
      })
      queryClient.invalidateQueries(["projects"]);
    }
  });
  return { mutate, isLoading, isError, error };
};

export { useEditProject, editProject };
