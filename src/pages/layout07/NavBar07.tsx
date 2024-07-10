import { Box, styled } from "@mui/material";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";

interface NavBar07Props {
  isSidebarOpen: boolean;
}

const StyledNavBar07 = styled(Box)<NavBar07Props>`
  background-color: lightsalmon;
  min-width: var(--sidebar-width);
  margin-left: calc(-1 * var(--sidebar-width));
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  height: 100vh;

  z-index: 100;

  transform: ${(props) =>
    props.isSidebarOpen ? "translateX(var(--sidebar-width))" : "translateX(0)"};

  transition: transform 0.3s ease-out;
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

export default function NavBar07({ isSidebarOpen }: NavBar07Props) {
  useLockBodyScroll(isSidebarOpen);

  return (
    <StyledNavBar07 isSidebarOpen={isSidebarOpen}>
      <StyledNavBarSection1>section1</StyledNavBarSection1>
      <StyledNavBarSection2>section3</StyledNavBarSection2>
      <StyledNavBarSection3>fixed bottom</StyledNavBarSection3>
    </StyledNavBar07>
  );
}
