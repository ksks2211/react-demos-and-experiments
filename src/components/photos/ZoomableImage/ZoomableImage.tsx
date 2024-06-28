import { Box, styled } from "@mui/material";
import { useState } from "react";

interface ZoomableImageProps {
  src: string;
}

const StyledZoomableImageWrapper = styled(Box)<{ isZoom: boolean }>`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  display: flex;

  align-items: center;
  justify-content: center;

  cursor: ${(props) => (props.isZoom ? "zoom-out" : "zoom-in")};
`;

const StyledBackgroundWrapper = styled(Box)`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const StyledBackgroundImage = styled("img")`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;

  object-fit: cover;
  transform: scale(1.2);
  filter: blur(24px);
`;

const StyledOverlay = styled(Box)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;

const StyledCenteredImage = styled("img")<{ isZoom: boolean }>`
  position: absolute;
  margin: auto;

  top: 0;
  left: 0;
  right: 0;

  display: flex;
  width: ${(props) => (props.isZoom ? "auto" : "100%")};
  height: ${(props) => (props.isZoom ? "auto" : "100%")};
  object-fit: contain;
  z-index: 30;
`;

export default function ZoomableImage({ src }: ZoomableImageProps) {
  const [isZoom, setIsZoom] = useState(false);

  const handleZoom = () => {
    setIsZoom((prev) => !prev);
  };

  return (
    <StyledZoomableImageWrapper onClick={handleZoom} isZoom={isZoom}>
      <StyledBackgroundWrapper>
        <StyledBackgroundImage src={src} />
      </StyledBackgroundWrapper>
      <StyledOverlay />
      <StyledCenteredImage src={src} isZoom={isZoom} />
    </StyledZoomableImageWrapper>
  );
}
