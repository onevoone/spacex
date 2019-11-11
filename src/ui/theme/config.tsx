import { fonts } from './fonts'


export const themeVars: {
  [key: string]: string;
  DARK: string;
  LIGHT: string;
} = {
  DARK: "dark",
  LIGHT: "light",
}


export const themeConfig: any = {
  typography: {
    fontFamily: "Catamaran, Arial",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": fonts
      },
    },
  },
  dark: {
    palette: {
      type: "dark",
      primary: {
        main: "#000000",
      },
    },
  },
  light: {
    palette: {
      type: "light",
    },
  },
}