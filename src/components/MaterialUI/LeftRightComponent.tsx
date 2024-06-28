import { useState } from "react";
import Box from "@mui/material/Box";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const LeftRightComponent = () => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleSidebar = () => {
    setIsHidden(!isHidden);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "200vh",
        flexDirection: "row",
        width: "100%",
        overflowY: "hidden",
      }}
    >
      <Sidebar isHidden={isHidden} />
      <MainContent isHidden={isHidden} toggleSidebar={toggleSidebar} />
    </Box>
  );
};

export default LeftRightComponent;
