import { Box, styled } from "@mui/material";
import { useScrollDownVisibility } from "../../hooks/useScroll";

interface HeaderProps {
  visible?: boolean;
}

const StyledHeader13 = styled(Box)<HeaderProps>`
  background-color: lightblue;
  min-height: var(--header-height);
  width: 100%;

  /* position: absolute; */
  position: sticky;
  top: 0;
  z-index: 999;
  transition: transform ${(props) => (props.visible ? ".3s" : ".2s")} ease-out,
    opacity ${(props) => (props.visible ? ".3s" : ".2s")} ease-in;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: ${(props) =>
    props.visible
      ? "translateY(0)"
      : "translateY(calc(-1 * var(--header-height)))"};
`;

export default function Header13() {
  const { visible } = useScrollDownVisibility();

  return (
    <StyledHeader13
      className={visible ? "fade-in" : "fade-out"}
      visible={visible}
    >
      Hided Header
    </StyledHeader13>
  );
}
