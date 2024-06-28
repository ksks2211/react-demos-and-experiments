import { Box, styled } from "@mui/material";

interface Navigation10Props {
  isOpen: boolean;
}

const StyledNavigation = styled(Box)<Navigation10Props>`
  min-height: 60vh;
  max-height: calc(100vh - var(--header-height));
  background-color: darkgreen;
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;

  transform: ${(props) =>
    props.isOpen ? "translateY(0)" : "translateY(-100vh)"};

  transition: transform 0.5s ease-in-out;
`;

export default function Navigation10({ isOpen }: Navigation10Props) {
  return <StyledNavigation isOpen={isOpen}>navigation</StyledNavigation>;
}
