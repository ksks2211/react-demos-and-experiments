import { Box, styled } from "@mui/material";

const StyledHeader01 = styled(Box)`
  background-color: lightblue;
  min-height: var(--header-height);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Header01() {
  return <StyledHeader01>2분할</StyledHeader01>;
}
