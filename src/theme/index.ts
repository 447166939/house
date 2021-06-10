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
  breakpoints: {
    values: {
      xs: 0,
      sm: 540,
      md: 768,
      lg: 1024,
      xl: 1920
    }
  }
});
export default theme;
