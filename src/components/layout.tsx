import { Box } from "@mui/material";
import Header from "@/components/Header";
import React from "react";

export interface ILayout {}
const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <Box css={{ flexDirection: "column", display: "flex", height: "100vh" }}>
      <Header />
      <Box css={{ display: "flex", flexDirection: "column", flex: 1 }}>{children}</Box>
    </Box>
  );
};
export default Layout;
