import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Item } from "./Item";

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
