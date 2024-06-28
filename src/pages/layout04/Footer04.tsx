import { Box, styled } from "@mui/material";

const StyledFooter = styled(Box)`
  width: 100%;
  height: var(--footer-height);
  background-color: lightgreen;

  display: flex;
  /* align-items: center; */
  justify-content: center;
`;

export default function Footer04() {
  return <StyledFooter>footer</StyledFooter>;
}
