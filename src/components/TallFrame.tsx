import { Box, styled } from "@mui/material";

interface TallFrameProps extends React.HTMLAttributes<HTMLDivElement> {}

const StyledTallFrame = styled(Box)`
  display: flex;
  align-items: end;
  justify-content: center;

  position: relative;

  width: 100%;
  min-height: 500vh;

  background-color: lightblue;
`;

export default function TallFrame(props: TallFrameProps) {
  return <StyledTallFrame {...props} />;
}
