import { Box } from "@mui/material";
import type { MouseEventHandler } from "react";

type OverlayProps = {
  onClick: MouseEventHandler<HTMLDivElement>;
};

const Overlay: React.FC<OverlayProps> = ({ onClick }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
        zIndex: 1000, // Ensure it's above other content
        animation: "fade-in 0.5s forwards",
        "@keyframes fade-in": {
          from: { backgroundColor: "rgba(0, 0, 0, 0)" },
          to: { backgroundColor: "rgba(0, 0, 0, 0.4)" },
        },
      }}
      onClick={onClick}
    ></Box>
  );
};

export default Overlay;
