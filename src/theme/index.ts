import { createTheme, css, Theme } from "@mui/material";
import { orange } from "@mui/material/colors";
import { PaletteMode } from "@mui/material";

const commonStyles = css`
  :root {
    --header-height: 44px;
    --footer-height: 8rem;
    --sidebar-width: 260px;
  }
`;

const globalStylesLight = css`
  ${commonStyles}
  :root {
    --footer-color: #837c7c; // Example color for light mode
    --background-color: #ffffff;
    --text-color: #333333;
  }
`;

const globalStylesDark = css`
  ${commonStyles}
  :root {
    --footer-color: #505050; // Example color for dark mode
    --background-color: #121212;
    --text-color: #dddddd;
  }
`;

export default function createThemeWithMode(
  mode: PaletteMode = "light"
): Theme {
  return createTheme({
    palette: {
      mode,
    },
    status: {
      danger: orange[500],
    },
    components: {
      MuiCssBaseline: {
        styleOverrides:
          mode === "light" ? globalStylesLight.styles : globalStylesDark.styles,
      },
    },
  });
}
