import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Header13 from "./Header13";
import Main13 from "./Main13";
import BottomBar13 from "./BottomBar13";

const StyledLayout13 = styled(Box)`
  background-color: lightcoral;
  width: 100%;

  height: 100%;
`;

export default function Layout13() {
  return (
    <StyledLayout13>
      <Header13 />
      <Main13 />
      <BottomBar13 />
    </StyledLayout13>
  );
}
