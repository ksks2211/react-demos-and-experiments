import { Box, styled } from "@mui/material";

const StyledMain08 = styled(Box)`
  background-color: lightcyan;
  display: flex;
  justify-content: center;

  /* flex-shrink: 1; */
  width: 100%;
  height: 100%;
`;

interface MainProps {
  toggle: () => void;
  isSidebarOpen: boolean;
}

export default function Main08({ toggle, isSidebarOpen }: MainProps) {
  const onClick = () => {
    toggle();
  };
  return (
    <StyledMain08 onClick={isSidebarOpen ? undefined : onClick}>
      Main
    </StyledMain08>
  );
}
