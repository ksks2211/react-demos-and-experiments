import type { SxProps, Theme } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ButtonMui from "./ButtonMui";

export default function FixedContainer() {
  const sx: SxProps<Theme> = {
    bgcolor: "#cfe8fc",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    display: "flex",
    color: "purple",
    fontSize: "2rem",
    textShadow: "transparent 0 0 1px",
    fontSynthesis: "none",
    transition: "font-weight 0.2s, background-color 0.2s, transform 0.2s",
    "&:hover": {
      fontWeight: "bold",
      textDecoration: "underline",
      color: "#007BFF",
      backgroundColor: "#f5f5f5",
      transform: "scale(1.05)",
      textShadow: "10px 10px 20px rgba(0, 0, 0, 1);",
    },
  };

  return (
    <Container maxWidth="xl">
      <Box sx={sx}>
        <Box>
          Hello World
          <ButtonMui />
        </Box>
      </Box>
    </Container>
  );
}
