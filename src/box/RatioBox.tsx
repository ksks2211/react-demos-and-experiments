import { Box, styled } from "@mui/material";
import { HTMLAttributes } from "react";

interface RatioBoxProps extends HTMLAttributes<HTMLDivElement> {
  width: string;
}
const StyledRatioBox = styled(Box)<RatioBoxProps>`
  background-color: orange;
  width: ${(props) => props.width};
`;

const StyledRatioContent = styled(Box)`
  background-color: aquamarine;
  position: relative;
  height: 0;
  padding-top: 56.25%;

  & > * {
    background-color: bisque;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
`;

const RatioBox: React.FC<RatioBoxProps> = ({
  width,
  children,
  ...rest
}: RatioBoxProps) => {
  return (
    <StyledRatioBox width={width} {...rest}>
      <StyledRatioContent>{children}</StyledRatioContent>
    </StyledRatioBox>
  );
};

export default RatioBox;
