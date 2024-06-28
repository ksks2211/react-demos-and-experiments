import { Box, styled } from "@mui/material";
import Header01 from "./Header01";
import Main01 from "./Main01";

const StyledLayout01 = styled(Box)`
  background-color: orange;
  height: 200vh;
  width: 100%;
`;

// Header + Main
export default function Layout01() {
  return (
    <StyledLayout01>
      <Header01 />
      <Main01 />
    </StyledLayout01>
  );
}
