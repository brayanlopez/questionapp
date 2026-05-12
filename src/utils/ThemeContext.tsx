import React, { createContext, useContext, useMemo, useState } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import { purple } from "@mui/material/colors";
import type { ColorModeContextValue, ThemeProviderProps } from "../types";

const ColorModeContext = createContext<ColorModeContextValue>({
  toggleColorMode: () => {},
});

export const useColorMode = () => useContext(ColorModeContext);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode, primary: { main: purple[600] } },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
};
