import { Box, styled } from "@mui/material";
import Main05 from "./Main05";
import NavBar05 from "./NavBar05";

const StyledLayout05 = styled(Box)`
  background-color: orange;
  height: 200vh;
  width: 100%;

  display: flex;
  flex-flow: row;
  position: relative;
`;

export default function Layout05() {
  return (
    <StyledLayout05>
      <NavBar05 />
      <Main05 />
    </StyledLayout05>
  );
}
