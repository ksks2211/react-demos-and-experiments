import { Box, styled } from "@mui/material";
import Header04 from "./Header04.tsx";
import Main04 from "./Main04";
import Footer04 from "./Footer04.tsx";

const StyledLayout04 = styled(Box)`
  background-color: orange;
  height: 700vh;
  width: 100%;

  position: relative;
`;

// Fixed Hided Header + Main
export default function Layout04() {
  return (
    <StyledLayout04>
      <Header04 />
      <Main04 />
      <Footer04 />
    </StyledLayout04>
  );
}
