import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { IThemeContext } from "./IThemeContext";

import {ThemeProvider} from "@mui/material";
import {Box} from "@mui/system";
import {DarkTheme, LightTheme} from "../themes";

const ThemeContext = createContext({} as IThemeContext);

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
}

export const AppThemeProvider: React.FC = ( {children} ) => {

    const [themeName, setThemeName] = useState<"light" | "dark">("light");

    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === "light" ? "dark" : "light");
    }, []);

    const theme = useMemo(() => {
        if (themeName === "light") return LightTheme;
        return DarkTheme;
    }, [themeName]);

    return (
        <ThemeContext.Provider value={{themeName, toggleTheme}}>
            <ThemeProvider theme={theme}>
                <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}