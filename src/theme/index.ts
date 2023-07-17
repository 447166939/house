import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"]
});

// Create a index instance.
const index = createTheme({
  palette: {
    primary: {
      main: "#4B66DA"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red.A400
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily
  }
});

export default index;
