import { Grid, Paper } from "@mui/material";

const SectionComponent = () => {
  return (
    <Grid container spacing={1} justifyContent="center">
      <Grid item lg={4} md={6} sm={12}>
        <Paper
          sx={{
            height: 140,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        ></Paper>
      </Grid>
      <Grid item lg={4} md={6} sm={12}>
        <Paper
          sx={{
            height: 140,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        ></Paper>
      </Grid>
      <Grid item lg={4} md={6} sm={12}>
        <Paper
          sx={{
            height: 140,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        ></Paper>
      </Grid>
    </Grid>
  );
};

export default SectionComponent;
