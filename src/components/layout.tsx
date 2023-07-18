import { Box } from "@mui/material";
import Header from "@/components/Header";

export interface ILayout {}
const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <Box css={{ flexDirection: "column", display: "flex", height: "100%" }}>
      <Header />
      <Box css={{ display: "flex", flexDirection: "column", flex: 1 }}>{children}</Box>
    </Box>
  );
};
export default Layout;
