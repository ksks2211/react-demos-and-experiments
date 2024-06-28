import CssBaseline from "@mui/material/CssBaseline";
import createThemeWithMode from "./theme";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThemeEx from "./pages/ThemeEx";
import LeftRightComponent from "./components/MaterialUI/LeftRightComponent";

import ModeSettingCompo from "./components/MaterialUI/ModeSettingCompo";
import { usePreferences } from "./hooks/usePreferences";

import LayoutRoutes from "./routes/LayoutRoutes";
import BoxRoutes from "./routes/BoxRoutes";
import MultimediaRoutes from "./routes/MultimediaRoutes";

function App() {
  const { mode, toggleMode } = usePreferences();

  // Global Theme
  const theme = createThemeWithMode(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ThemeEx toggleTheme={toggleMode} />} />

          {/* Simple Layout */}
          <Route path="/layout/*" element={<LayoutRoutes />} />
          <Route path="/example" element={<LeftRightComponent />} />

          {/* Box Component */}
          <Route path="/box/*" element={<BoxRoutes />} />

          {/* Multimedia Component */}
          <Route path="/multimedia/*" element={<MultimediaRoutes />} />

          {/* Client Side State */}
          <Route path="/s1" element={<ModeSettingCompo />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
