import { Box, styled } from "@mui/material";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";

interface NavBar09Props {
  isSidebarOpen: boolean;
}

const StyledNavBar09 = styled(Box)<NavBar09Props>`
  background-color: green;
  min-width: var(--sidebar-width);

  display: flex;
  flex-direction: column;

  height: 100vh;
  position: fixed;
  top: 0;

  z-index: 100;

  transform: ${(props) =>
    props.isSidebarOpen
      ? "translateX(0)"
      : "translateX(calc(-1 * var(--sidebar-width)))"};

  transition: transform 0.3s ease-out;

  flex-grow: 0;
  flex-shrink: 0;
`;

const StyledNavBarSection1 = styled(Box)`
  width: 100%;
  height: 3rem;
  flex-grow: 0;
  flex-shrink: 0;
  background-color: lightgoldenrodyellow;
`;

const StyledNavBarSection2 = styled(Box)`
  width: 100%;
  background-color: aliceblue;
  flex-grow: 1;
  flex-shrink: 0;
`;

const StyledNavBarSection3 = styled(Box)`
  width: 100%;
  height: 3rem;
  background-color: blueviolet;
  margin-top: auto;
  flex-grow: 0;
  flex-shrink: 0;
  align-self: flex-end;
`;

export default function NavBar09({ isSidebarOpen }: NavBar09Props) {
  useLockBodyScroll(isSidebarOpen);

  return (
    <StyledNavBar09 isSidebarOpen={isSidebarOpen}>
      <StyledNavBarSection1>section1</StyledNavBarSection1>
      <StyledNavBarSection2>section3</StyledNavBarSection2>
      <StyledNavBarSection3>fixed bottom</StyledNavBarSection3>
    </StyledNavBar09>
  );
}
