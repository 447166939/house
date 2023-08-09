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
        onSuccess: () => {
            queryClient.invalidateQueries(["projects"]);
        }
    });
    return { mutate, isLoading, isError, error };
};

export { useCreateProcess, createProcess };
