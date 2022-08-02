import { PaletteMode, PaletteOptions } from "@mui/material";
import palette from "../palette.module.scss";

declare module "@mui/material/styles" {
  interface Palette {
    light: Palette["primary"];
    dark: Palette["primary"];
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    light: PaletteOptions["primary"];
    dark: PaletteOptions["primary"];
    neutral: PaletteOptions["primary"];
  }
  interface TypeBackground {
    secondary: TypeBackground["default"];
  }
  interface TypeText {
    default: TypeText["primary"];
  }
}

const colorPalette: PaletteOptions = {
  mode: "light" as PaletteMode,
  background: {
    default: palette.backgroundDefault,
    secondary: palette.backgroundSecondary,
  },
  primary: {
    main: palette.primary,
    light: palette.primaryLight,
    dark: palette.primaryDark,
  },
  secondary: {
    main: palette.secondary,
  },
  success: {
    main: palette.success,
    dark: palette.successDark,
  },
  error: {
    main: palette.error,
    light: palette.errorLight,
    dark: palette.errorDark,
  },
  warning: {
    main: palette.warning,
  },
  info: {
    main: palette.info,
  },
  light: {
    main: palette.light,
    contrastText: palette.textDefault,
  },
  dark: {
    main: palette.dark,
    contrastText: palette.white,
  },
  neutral: {
    main: palette.neutral,
    contrastText: palette.textSecondary,
  },
  text: {
    default: palette.textDarken,
    primary: palette.textDefault,
    secondary: palette.textLighten,
  },
};
export default colorPalette;
