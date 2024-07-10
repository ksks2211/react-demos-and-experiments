import { Box, styled } from "@mui/material";
import Draggable from "react-draggable";

const MovableBox = styled(Box)`
  width: 100px;
  height: 100px;
  background-color: lightcoral;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;

  cursor: grab;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
  }
  &:active {
    cursor: grabbing;
  }
`;

export default function MovableBox2() {
  return (
    <Draggable>
      <MovableBox>Drag Me</MovableBox>
    </Draggable>
  );
}
