import { Grid, makeStyles } from "@material-ui/core";
import { mainSpacing } from '../styles/styles';
import Spinner from '../components/Spinner'
import { remoteHeisenberg } from '../constants/constants'

const useStyles = makeStyles({ mainSpacing });

const LoadingCharacter = () => {
  // hooks
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.mainSpacing} container item alignContent="center" xs={12} direction="column">
        <img
          src={remoteHeisenberg}
          alt="breaking-bad-logo"
          height={"250px"}
          width={"250px"}
        />
        <div align="center" className={classes.mainSpacing}>
          <Spinner />
        </div>
      </Grid>
    </>
  );
};

export default LoadingCharacter;
