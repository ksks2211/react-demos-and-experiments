import { Box, styled } from "@mui/material";
import Main09 from "./Main09";
import NavBar09 from "./NavBar09";
import { useState } from "react";

const StyledLayout09 = styled(Box)`
  background-color: orange;
  height: 200vh;
  max-width: 100vw;

  display: flex;
  flex-flow: row;
  position: relative;

  overflow-x: hidden;
`;

export default function Layout09() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <StyledLayout09>
      <NavBar09 isSidebarOpen={isSidebarOpen} />
      <Main09 toggle={toggleSidebar} isSidebarOpen={isSidebarOpen} />
    </StyledLayout09>
  );
}
