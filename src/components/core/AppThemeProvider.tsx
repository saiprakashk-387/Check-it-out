import React from "react";

import theme from "../../styles/theme";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

type Props = {
  children: React.ReactNode;
};

const AppThemeProvider: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
export default AppThemeProvider;
