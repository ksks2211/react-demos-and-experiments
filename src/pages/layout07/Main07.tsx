import { Box, styled } from "@mui/material";
import Overlay07 from "./Overlay07";

const StyledMainWrapper07 = styled(Box)`
  background-color: lightcyan;
  display: flex;
  justify-content: center;

  /* flex-shrink: 1; */
  width: 100%;
  height: 100vh;
  overflow-y: auto;

  /* overflow-y: hidden; */
`;

const StyledMain07 = styled(Box)`
  width: 100%;
  height: 1500px;

  background-color: green;

  /* pointer-events: none; */
`;

interface MainProps {
  toggle: () => void;
  isSidebarOpen: boolean;
}

export default function Main07({ toggle, isSidebarOpen }: MainProps) {
  const onClick = () => {
    toggle();
  };
  return (
    <StyledMainWrapper07>
      <StyledMain07 onClick={isSidebarOpen ? undefined : onClick}>
        content
      </StyledMain07>
      <Overlay07 toggle={toggle} isVisible={isSidebarOpen} />
    </StyledMainWrapper07>
  );
}
