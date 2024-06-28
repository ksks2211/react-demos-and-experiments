import { Box, styled } from "@mui/material";
import Main07 from "./Main07";
import NavBar07 from "./NavBar07";
import { useState } from "react";

const StyledLayout07 = styled(Box)`
  background-color: orange;
  width: 100%;

  display: flex;
  flex-flow: row;
  position: relative;
`;

export default function Layout07() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <StyledLayout07>
      <NavBar07 isSidebarOpen={isSidebarOpen} />
      <Main07 toggle={toggleSidebar} isSidebarOpen={isSidebarOpen} />
    </StyledLayout07>
  );
}
