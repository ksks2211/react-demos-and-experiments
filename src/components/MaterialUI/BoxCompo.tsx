import type { SxProps, Theme } from "@mui/material";
import Box from "@mui/material/Box";

const BoxCompo = () => {
  const style: SxProps<Theme> = {
    display: "flex",
    width: "100px",
    height: "100px",
    backgroundColor: "green",
    // border: "10px solid black",
    boxSizing: "border-box",
    // paddingLeft: "-20px",
    // marginLeft: "-20%",

    border: "10px solid red",
    margin: "30px",
    marginLeft: "-30px",
  };

  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box sx={style}>Haha</Box>
    </Box>
  );
};

export default BoxCompo;
