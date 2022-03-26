import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./routes";
import { LanguageProvider } from "./shared/contexts";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import {Header, Content, Footer} from './shared/components'
// import BasicTabs from "./shared/components/BasicTabs";

export const App = () => {
  return (
      <AppThemeProvider>
        <LanguageProvider>

        <BrowserRouter>

          <Header />
          <Content />
          <Footer />
          <AppRouter />
          
        </BrowserRouter>
        
        </LanguageProvider>
      </AppThemeProvider>
  );
}