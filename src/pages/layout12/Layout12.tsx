import { Box, styled } from "@mui/material";
import Inner from "./Inner";
import PrimaryColumn from "./PrimaryColumn";
import SidebarColumn from "./SidebarColumn";
import useBreakpoints from "../../hooks/useBreakpoint";

const StyledLayout12 = styled(Box)`
  width: 100%;

  background-color: lightblue;
  /* display: flex; */
  /* justify-content: center; */
`;

export default function Layout12() {
  const { isLg } = useBreakpoints();

  return (
    <StyledLayout12>
      <Inner>
        <PrimaryColumn />
        {isLg && <SidebarColumn />}
      </Inner>
    </StyledLayout12>
  );
}
