import { Box, styled } from "@mui/material";

const StyledMain02 = styled(Box)`
  background-color: lightcoral;
  height: 100%;
  width: 100%;

  // x
  display: flex;
  justify-content: center;
`;

export default function Main02() {
  return <StyledMain02>main</StyledMain02>;
}
