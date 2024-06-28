import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import useBreakpoints from "../../hooks/useBreakpoint";
import { ReactNode } from "react";

const StyledInner = styled(Box)<{ width: number }>`
  width: ${(props) => props.width}%;
  background-color: lightgoldenrodyellow;
  min-height: 200vh;
  margin: auto;
  display: flex;
`;

const useWidth = () => {
  const { isLgRange, isXlRange, isMdRange } = useBreakpoints();

  if (isXlRange) return 82;
  if (isLgRange) return 86;
  if (isMdRange) return 90;
  else return 100;
};

export default function Inner({ children }: { children: ReactNode }) {
  const width = useWidth();
  return <StyledInner width={width}>{children}</StyledInner>;
}
