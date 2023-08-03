import { useQuery } from "@tanstack/react-query";
import { axios } from "@/utils/Httputil";
import { useDispatch } from "react-redux";
import actions from "@/store/modules/global/action";
const { setProjectconfig } = actions;
const queryProjectConfig = async (dispatch: any) => {
  const response = await axios.get("/project/config");
  console.log("projectConfig", response);
  dispatch(setProjectconfig(response.data));
  return response.data;
};

const useProjectConfig = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError, error } = useQuery(["projectConfig"], () =>
    queryProjectConfig(dispatch)
  );
  return { data, isLoading, isError, error };
};

export { useProjectConfig, queryProjectConfig };
