import { Box, styled } from "@mui/material";
import Main11 from "./Main11";
import NavBar11 from "./NavBar11";
import { useState } from "react";

const StyledLayout11 = styled(Box)`
  background-color: green;
  height: 200vh;
  width: 100%;

  display: flex;
  flex-flow: row;
  position: relative;
`;

export default function Layout11() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <StyledLayout11>
      <NavBar11 isSidebarOpen={isSidebarOpen} />
      <Main11 toggle={toggleSidebar} isSidebarOpen={isSidebarOpen} />
    </StyledLayout11>
  );
}
