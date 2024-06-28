import { Box, styled } from "@mui/material";

interface NavBar11Props {
  isSidebarOpen: boolean;
}

const StyledNavBar11 = styled(Box)<NavBar11Props>`
  background-color: lightsalmon;
  min-width: var(--sidebar-width);
  /* margin-left: calc(-1 * var(--sidebar-width)); */

  display: flex;
  position: sticky;
  top: 0;
  flex-direction: column;

  margin-left: ${(props) =>
    props.isSidebarOpen ? "0" : "calc(-1 * var(--sidebar-width))"};

  z-index: 100;

  transition: margin-left 0.3s ease-out;

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

export default function NavBar11({ isSidebarOpen }: NavBar11Props) {
  return (
    <StyledNavBar11 isSidebarOpen={isSidebarOpen}>
      <StyledNavBarSection1>section1</StyledNavBarSection1>
      <StyledNavBarSection2>section3</StyledNavBarSection2>
      <StyledNavBarSection3>fixed bottom</StyledNavBarSection3>
    </StyledNavBar11>
  );
}
