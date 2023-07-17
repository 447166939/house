import {Box, Grid} from "@mui/material";
import Header from "@/components/Header";

export interface ILayout {}
const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <Box css={{flexDirection:'column',display:'flex'}}>
      <Header />
      <Box>{children}</Box>
    </Box>
  );
};
export default Layout;
