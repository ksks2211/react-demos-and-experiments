import { Box, styled } from "@mui/material";

const StyledNavBar05 = styled(Box)`
  background-color: lightsalmon;
  width: var(--sidebar-width);

  flex-shrink: 0;
  height: 100%;
`;

export default function NavBar05() {
  return <StyledNavBar05>navbar</StyledNavBar05>;
}
