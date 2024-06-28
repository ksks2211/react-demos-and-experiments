import { Box, styled } from "@mui/material";
import Header03 from "./Header03";
import Main03 from "./Main03";

const StyledLayout03 = styled(Box)`
  background-color: orange;
  height: 200vh;
  width: 100%;

  position: relative;
`;

// Fixed Hided Header + Main
export default function Layout03() {
  return (
    <StyledLayout03>
      <Header03 />
      <Main03 />
    </StyledLayout03>
  );
}
