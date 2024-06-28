import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";

export function ContainerExample({ sx }: { sx: SxProps<Theme> }) {
  return (
    <Container
      maxWidth="md"
      sx={{ backgroundColor: "orange", height: "50vh", padding: "0 24px" }}
    >
      <Box sx={sx} flexShrink={0} />
    </Container>
  );
}
