import React, { ReactElement, useEffect } from "react";
import Layout from "@/components/layout";
import Content from "@/components/Project/Content";
import Sider from "@/components/Project/Sider";
import Pannel from "@/components/Project/Pannel";
import { NextPage } from "next";
import { Box } from "@mui/material";
import { useProjectConfig } from "@/hooks/useProjectConfig";
import { useQueryClient } from "@tanstack/react-query";

export type IPage = NextPage & { getLayout: (props: ReactElement) => ReactElement };
const project: IPage = (props) => {
  const queryClient = useQueryClient();
  useProjectConfig();
  useEffect(() => {
    queryClient.fetchQuery(["projectConfig"]);
  }, []);

  return (
    <Box
      css={{ display: "flex", flexWrap: "nowrap", flex: 1, userSelect: "none", maxHeight: "100%" }}>
      <Sider />
      <Content />
      <Pannel />
    </Box>
  );
};
export default project;
project.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
