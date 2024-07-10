import { Box, styled } from "@mui/material";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";

interface NavBar08Props {
  isSidebarOpen: boolean;
  toggleSidebar?: () => void;
}

const StyledNavBar08 = styled(Box)<NavBar08Props>`
  background-color: lightsalmon;
  width: 100%;
  margin-left: -100%;

  display: flex;
  flex-direction: column;

  position: fixed;
  top: 0;
  z-index: 100;

  transform: ${(props) =>
    props.isSidebarOpen ? "translateX(100%)" : "translateX(0)"};

  transition: transform 0.4s ease-out;

  height: 100vh;
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

export default function NavBar08({
  isSidebarOpen,
  toggleSidebar,
}: NavBar08Props) {
  useLockBodyScroll(isSidebarOpen);

  return (
    <StyledNavBar08 isSidebarOpen={isSidebarOpen}>
      <StyledNavBarSection1 onClick={toggleSidebar}>
        section1
      </StyledNavBarSection1>
      <StyledNavBarSection2>section3</StyledNavBarSection2>
      <StyledNavBarSection3>fixed bottom</StyledNavBarSection3>
    </StyledNavBar08>
  );
}
