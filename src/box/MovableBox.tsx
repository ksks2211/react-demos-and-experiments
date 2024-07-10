import { Box, styled } from "@mui/material";
import { useState } from "react";

const StyledContainer = styled(Box)`
  width: 100%;
  height: 100vh;

  position: relative;

  background-color: aliceblue;

  overflow: hidden;

  & .box {
    width: 100px;
    height: 100px;

    background-color: aquamarine;

    &:hover {
      background-color: aqua;
    }

    &:active {
      cursor: grabbing;
    }

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
    }

    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;

    cursor: grab;
  }
`;

export default function MovableBox() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - 50, // Adjust for box width/2
        y: e.clientY - 50, // Adjust for box height/2
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <StyledContainer
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <Box
        className="box"
        onMouseDown={handleMouseDown}
        style={{ left: position.x, top: position.y }}
      >
        Drag me
      </Box>
    </StyledContainer>
  );
}
