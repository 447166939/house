import { useQuery } from "@tanstack/react-query";
import { axios } from "@/utils/Httputil";
import { isBefore, parseISO } from "date-fns";
import { useDispatch } from "react-redux";
import actions from "@/store/modules/global/action";
const { sortProjects, setCurrentproject } = actions;
const queryProjects = async (dispatch: any) => {
  const response = await axios.post("/project/projectList", { page: 0 });
  const list = response.data.list || [];
  list.sort((a: any, b: any) => isBefore(parseISO(a.create_time), parseISO(b.create_time)));
  dispatch(sortProjects(list));
  dispatch(setCurrentproject(list[0]));
  return response.data;
};

const useProjects = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError, error } = useQuery(
    ["projects"],
    () => queryProjects(dispatch),
    { enabled: false }
  );
  return { data, isLoading, isError, error };
};

export { useProjects, queryProjects };
