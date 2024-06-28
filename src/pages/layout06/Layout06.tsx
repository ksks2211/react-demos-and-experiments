import { Box, styled } from "@mui/material";
import Main06 from "./Main06";
import Sidebar06 from "./Sidebar06";

const StyledLayout06 = styled(Box)`
  background-color: orange;
  height: 200vh;
  width: 100%;

  display: flex;
  flex-flow: row;
  position: relative;
`;

export default function Layout06() {
  return (
    <StyledLayout06>
      <Main06 />
      <Sidebar06 />
    </StyledLayout06>
  );
}
