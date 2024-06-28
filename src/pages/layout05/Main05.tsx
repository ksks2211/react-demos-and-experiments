import { Box, styled } from "@mui/material";

const StyledMain05 = styled(Box)`
  background-color: lightcyan;
  display: flex;
  justify-content: center;

  /* flex-shrink: 1; */
  width: 100%;
  height: 100%;
`;

export default function Main05() {
  return <StyledMain05>main</StyledMain05>;
}
