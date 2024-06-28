import { Box, styled } from "@mui/material";

const StyledPrimaryColumn = styled(Box)`
  width: 100%;
  background-color: lightcoral;
  flex-grow: 1;
`;

export default function PrimaryColumn() {
  return <StyledPrimaryColumn>Primary Column</StyledPrimaryColumn>;
}
