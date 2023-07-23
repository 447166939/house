import { Roboto } from "next/font/google";
import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"]
});
const index = createTheme({
  status: {
    danger: "#e53e3e"
  },
  palette: {
    primary: {
      main: "#4B66DA"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red.A400
    },
    checkbox: {
      main: "#fff",
      contrastText: "#fff"
    },
    green:{
      main: "#23A55A",
      contrastText: "#23A55A"
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily
  }
});

export default index;
