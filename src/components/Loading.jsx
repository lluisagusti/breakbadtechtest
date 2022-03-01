import { CircularProgress, Grid } from "@material-ui/core";

const Loading = () => {
  return (
    <>
      <Grid container item alignContent="center" xs={12} direction="column">
        <img src="walter-white-sm.png" alt="heisenberg-face" />
        <div align="center">
          <CircularProgress color="inherit" />
        </div>
      </Grid>
    </>
  );
};

export default Loading;
