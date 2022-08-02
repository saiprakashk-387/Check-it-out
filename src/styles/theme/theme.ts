import { createTheme } from "@mui/material";
import { unstable_ClassNameGenerator } from "@mui/material/className";
// import colors from "styles/palette.module.scss";

import palette from "./colorPalette";
import typography from "./typography";
import components from "./components";

// call this function at the root of the application
unstable_ClassNameGenerator.configure((componentName) =>
  componentName.replace("Mui", "")
);

declare module "@mui/material/styles" {
  interface ThemeOptions {
    // add theme options if needed
  }

  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
    mobile: false;
    tablet: false;
    laptop: false;
    desktop: false;
  }
}

const themeOptions = {
  // add theme options if needed
};

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 1024,
    lg: 1280,
    xl: 1536,
    xxl: 1800,
  },
};

const theme = createTheme(
  {
    palette,
    shape: {
      borderRadius: 0,
    },
    breakpoints,
    typography,
    components: {
      ...(components as any),
    },
  }
  // themeOptions
);

export default theme;
