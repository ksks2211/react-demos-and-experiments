import { Box, styled } from "@mui/material";

const StyledSidebarColumn = styled(Box)`
  background-color: lightpink;
  flex-basis: 33%;
`;

export default function SidebarColumn() {
  return <StyledSidebarColumn>Sidebar</StyledSidebarColumn>;
}
