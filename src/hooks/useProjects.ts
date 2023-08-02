import { useQuery } from "@tanstack/react-query";
import { axios } from "@/utils/Httputil";
const queryProjects = async () => {
  const response = await axios.post("/project/projectList", { page: 0 });
  return response.data;
};

const useProjects = () => {
  const { data, isLoading, isError, error } = useQuery(["projects"], queryProjects);
  return { data, isLoading, isError, error };
};

export { useProjects, queryProjects };
