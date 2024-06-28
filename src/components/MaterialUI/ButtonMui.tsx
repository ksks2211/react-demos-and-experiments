import { Button, ThemeProvider } from "@mui/material";
import mainTheme from "../../theme";

function ButtonMui() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Button
        variant="text"
        sx={{ backgroundColor: (theme) => theme.status.danger }}
      >
        Hello World
      </Button>
    </ThemeProvider>
  );
}

export default ButtonMui;
