import { Grid } from "@mui/material";

const MyComponent = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={false}
        style={{ width: "260px", backgroundColor: "blue", minHeight: "200vh" }}
      />
      <Grid item xs style={{ backgroundColor: "green", minHeight: "200vh" }} />
    </Grid>
  );
};

export default MyComponent;
