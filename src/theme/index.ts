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
      xs: 0, // mobile
      sm: 540, // mobile -> tablet
      md: 768, // tablet -> laptop
      lg: 1280, // laptop -> PC
      xl: 1920 // desktop
    }
  }
});

export default theme;
