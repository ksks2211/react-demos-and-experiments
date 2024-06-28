import Box from "@mui/material/Box";
import type { MouseEventHandler } from "react";
import Overlay from "./Overlay";

const MainContent = ({
  isHidden,
  toggleSidebar,
}: {
  isHidden: boolean;
  toggleSidebar: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <Box
      sx={{
        flex: 1,
        backgroundColor: "green",

        display: "flex",
        justifyContent: "center",
        minHeight: "200vh",
        marginLeft: isHidden ? "-260px" : "0",
        transition: "margin-left 0.3s ease",
        position: "relative",
        flexShrink: 0,

        overflowY: "hidden",
      }}
      onClick={toggleSidebar}
    >
      {!isHidden && <Overlay onClick={toggleSidebar} />}
      Hello
      Worldsdsadsadasdsadsadsadsadasdsaddddddddddddddddddddddddddddddddddddddddddddddd
    </Box>
  );
};

export default MainContent;
