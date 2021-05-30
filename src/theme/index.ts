import palette from "./palette";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
const theme = createMuiTheme({
  palette,
  custom: {
    background: "linear-gradient(90deg, #7D3BF1 0%, #2FD1DA 100%) 0% 0%"
  },
  typography: {
    body2: {
      fontFamily: "Nunito Sans"
    },
    fontFamily: "Nunito Sans"
  },
});
export default theme;
