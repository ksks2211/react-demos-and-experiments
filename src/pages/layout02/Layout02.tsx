import { Box, styled } from "@mui/material";
import Header02 from "./Header02";
import Main02 from "./Main02";

const StyledLayout02 = styled(Box)`
  background-color: orange;
  height: 200vh;
  width: 100%;

  position: relative;
`;

// Fixed Header + Main
export default function Layout02() {
  return (
    <StyledLayout02>
      <Header02 />
      <Main02 />
    </StyledLayout02>
  );
}
