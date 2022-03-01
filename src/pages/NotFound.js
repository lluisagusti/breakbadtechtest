import { Grid } from "@material-ui/core";

const NotFound = () => {
  return (
    <>
      <Grid container item alignContent="center" xs={12} direction="column">
        <img src="walter-white-sm.png" alt="heisenberg-face" />
        <div align="center">
          <h3>Page Not Found</h3>
        </div>
      </Grid>
    </>
  );
};

export default NotFound;
