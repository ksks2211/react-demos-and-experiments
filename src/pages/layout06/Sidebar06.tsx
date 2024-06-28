import { Box, styled } from "@mui/material";

const StyledSidebar06 = styled(Box)`
  background-color: aquamarine;
  width: var(--sidebar-width);

  flex-shrink: 0;
  height: 100%;
`;

export default function Sidebar06() {
  return <StyledSidebar06>sidebar</StyledSidebar06>;
}
