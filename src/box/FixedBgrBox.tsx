import { Box, styled } from "@mui/material";

const StyledFixedBgrBox = styled(Box)`
  width: 50vw;
  height: 50vh;

  background-color: orange;
`;

export default function FixedBgrBox() {
  return <StyledFixedBgrBox>Box</StyledFixedBgrBox>;
}
