import { Box, styled } from "@mui/material";
import Overlay09 from "./Overlay09";

interface Main09Props {
  isSidebarOpen: boolean;
}

const StyledMain07 = styled(Box)<Main09Props>`
  background-color: lightcyan;
  display: flex;
  justify-content: center;
  position: relative;

  transform: ${(props) =>
    props.isSidebarOpen ? "translateX(260px)" : "translateX(0)"};

  transition: transform 0.3s ease-out;

  flex-shrink: 0;
  width: 100%;
  height: 100%;
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
    <StyledMain07 isSidebarOpen={isSidebarOpen}>
      <span onClick={onClick} style={{ backgroundColor: "orange" }}>
        main (isSidebarOpen:{isSidebarOpen ? "Yes" : "No"})
      </span>
      <Overlay09 toggle={toggle} isVisible={isSidebarOpen} />
    </StyledMain07>
  );
}
