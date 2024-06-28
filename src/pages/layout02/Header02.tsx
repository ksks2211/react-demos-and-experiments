import { Box, styled } from "@mui/material";

const StyledHeader02 = styled(Box)`
  background-color: lightblue;
  min-height: var(--header-height);
  width: 100%;

  /* position: absolute; */
  position: sticky;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Header02() {
  return <StyledHeader02>고정헤더</StyledHeader02>;
}
