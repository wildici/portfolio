import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./routes";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";
// import BasicTabs from "./shared/components/BasicTabs";

export const App = () => {
  return (
      <AppThemeProvider>
        <BrowserRouter>
          <AppRouter />
          {/* <BasicTabs /> */}
        </BrowserRouter>
      </AppThemeProvider>
  );
}