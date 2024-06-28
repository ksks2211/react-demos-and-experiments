import { Box } from "@mui/material";

const Sidebar = ({ isHidden }: { isHidden: boolean }) => {
  return (
    <Box
      sx={{
        width: 260,
        backgroundColor: "blue",
        minHeight: "200vh",
        transform: isHidden ? "translateX(-260px)" : "translateX(0)",
        transition: "transform 0.3s ease",
        flexShrink: 0,
      }}
    >
      sidebar
    </Box>
  );
};

export default Sidebar;
