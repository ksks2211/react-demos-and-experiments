import Box from "@mui/material/Box";

const MyComponent = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "200vh" }}>
      <Box sx={{ width: "260px", backgroundColor: "blue" }} />
      <Box sx={{ flex: 1, backgroundColor: "green" }} />
    </Box>
  );
};

export default MyComponent;
