import { Box, styled } from "@mui/material";

const StyledMain03 = styled(Box)`
  background-color: lightcoral;
  height: 100%;
  width: 100%;

  // x
  display: flex;
  justify-content: center;
`;

export default function Main03() {
  return <StyledMain03>main</StyledMain03>;
}
