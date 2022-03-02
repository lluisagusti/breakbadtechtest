import { Grid, Typography, makeStyles } from "@material-ui/core";
import GoRootButton from "./GoToRootButton";

const useStyles = makeStyles({
  mainSpacing: {
    paddingTop: "3em"
  },
  textSpacing: {
    paddingTop: "3em",
  },
});

const Error = ({ errorMessage }) => {

  // hooks
  const classes = useStyles();

  return (
    <>
      <Grid container item alignContent="center" xs={12} direction="column">
        <Typography align="center" variant="h5" component="div">
          Error!
        </Typography>
        <Typography className={classes.mainSpacing} align="center" variant="h6" component="div">
          {errorMessage}
        </Typography>
        <Typography className={classes.textSpacing}  align="center" variant="body2">
          Please, reuturn home to continue enjoying.
        </Typography>
      </Grid>
      <Grid className={classes.textSpacing} alignContent="center" container item xs={12} direction="column">
        <GoRootButton />
      </Grid>
    </>
  );
};

export default Error;
