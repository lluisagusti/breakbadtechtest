import { CircularProgress, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  loadingSpacing: {
    paddingTop: "7em",
  },
});

const LoadingCharacter = () => {
  // hooks
  const classes = useStyles();

  const remoteImg = `https://breakingbadapi.com/static/media/breaking_bad.6d275852.jpg`;

  return (
    <>
      <Grid className={classes.loadingSpacing} container item alignContent="center" xs={12} direction="column">
        <img
          src={remoteImg}
          alt="breaking-bad-logo"
          height={"250px"}
          width={"250px"}
        />
        <div align="center" className={classes.loadingSpacing}>
          <CircularProgress color="inherit" />
        </div>
      </Grid>
    </>
  );
};

export default LoadingCharacter;
