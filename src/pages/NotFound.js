import { Grid, makeStyles, Typography } from "@material-ui/core";
import GoRootButton from '../components/GoToRootButton'


const useStyles = makeStyles({
  mainSpacing: {
    paddingTop: "7em",
  },
  textSpacing: {
    paddingTop: "3em",
  },
});


const NotFound = () => {

    // hooks
    const classes = useStyles();

    const remoteImg = `https://breakingbadapi.com/static/media/button.166e4f54.jpg`;


  return (
    <>
       <Grid className={classes.mainSpacing} container item alignContent="center" xs={12} direction="column">
        <img
          src={remoteImg}
          alt="breaking-bad-logo"
          height={"250px"}
          width={"250px"}
        />
        <Typography align="center" variant="h5" component="div">
          Page Not Found
        </Typography>
      </Grid>
      <Typography className={classes.textSpacing}  align="center" variant="body2">
          Please, reuturn home to continue enjoying.
        </Typography>
      <Grid className={classes.textSpacing} alignContent="center" container item xs={12} direction="column">
        <GoRootButton />
      </Grid>
    </>
  );
};

export default NotFound;
