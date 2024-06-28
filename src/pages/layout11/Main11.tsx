import { Box, styled } from "@mui/material";

const StyledMain11 = styled(Box)`
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

export default function Main11({ toggle, isSidebarOpen }: MainProps) {
  const onClick = () => {
    toggle();
  };
  return (
    <StyledMain11 onClick={onClick}>
      main (isSidebarOpen:{isSidebarOpen ? "Yes" : "No"})
    </StyledMain11>
  );
}
