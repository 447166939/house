declare global {
  declare module "*.svg";
  declare module "*.png";
}
declare module "@mui/material/styles" {
  export { createTheme } from "@mui/styles";
  interface Theme {
    status: {
      danger: React.CSSProperties["color"];
    };
  }

  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"];
    };
  }

  interface Palette {
    checkbox: Palette["primary"];
  }

  interface PaletteOptions {
    checkbox: PaletteOptions["primary"];
  }

  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }
}
