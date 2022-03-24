import { useAppThemeContext } from '../shared/contexts';
import IconButton from '@mui/material/IconButton';
import { DarkMode, LightMode } from "@mui/icons-material";


import {
    Routes,
    Route,
    Navigate
  } from "react-router-dom";

  export const AppRouter = () => {

    const { toggleTheme, themeName } = useAppThemeContext();

      return (
        <Routes>

            <Route path="/index" element={
              <IconButton component="span" onClick={toggleTheme}>
                {themeName === "light" ? <DarkMode /> : <LightMode color="primary" />}
              </IconButton>
            } />

            <Route path="*" element={<Navigate to="/index" />} />

        </Routes>
      );
  }