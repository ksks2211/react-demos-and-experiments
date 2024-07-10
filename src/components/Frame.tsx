import { Box, styled } from "@mui/material";
import { Outlet } from "react-router-dom";

const StyledFrame = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: transparent;
`;

export default function Frame() {
  return (
    <StyledFrame>
      <Outlet />
    </StyledFrame>
  );
}
