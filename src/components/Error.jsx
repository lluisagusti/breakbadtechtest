import { Grid } from "@material-ui/core";

const Error = ({errorMessage}) => {
  return (
    <>
      <Grid container item alignContent="center" xs={12} direction="column">
        <img src="walter-white-sm.png" alt="heisenberg-face" />
        <div align="center">
          <h2>{errorMessage}</h2>
        </div>
      </Grid>
    </>
  );
};

export default Error;
