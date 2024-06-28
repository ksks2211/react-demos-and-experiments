import { Box, styled } from "@mui/material";

const StyledMain01 = styled(Box)`
  background-color: lightcoral;
  height: 100%;

  // x
  display: flex;
  justify-content: center;
  padding-top: 30vh;
`;

export default function Main01() {
  return <StyledMain01>main</StyledMain01>;
}
