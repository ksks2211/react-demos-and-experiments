import { styled } from "@mui/material";
import { useEffect, useState } from "react";

const StyledFullScreenBtn = styled("button")`
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
`;

export default function FullScreenBtn() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        alert(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", onFullscreenChange);
    };
  }, []);

  return (
    <StyledFullScreenBtn onClick={handleFullscreen}>
      {isFullscreen ? "Exit" : "Full Screen"}
    </StyledFullScreenBtn>
  );
}
