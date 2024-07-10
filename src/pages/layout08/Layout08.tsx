import { Box, styled } from "@mui/material";
import Main08 from "./Main08";
import NavBar08 from "./NavBar08";
import { useState } from "react";

const StyledLayout08 = styled(Box)`
  background-color: orange;
  height: 200vh;
  width: 100%;

  display: flex;
  position: relative;
`;

export default function Layout08() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <StyledLayout08>
      <NavBar08 isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Main08 toggle={toggleSidebar} isSidebarOpen={isSidebarOpen} />
    </StyledLayout08>
  );
}
