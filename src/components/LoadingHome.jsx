import { Grid } from "@material-ui/core";
import Spinner from "./Spinner";
import { remoteHeisenberg, localHeisenberg } from '../constants/constants'

const LoadingHome = () => {
  
  return (
      <Grid container item alignContent="center" xs={12} direction="column">
        <img src={localHeisenberg || remoteHeisenberg} alt="breaking-bad-logo" />
        <div align="center">
        <Spinner />
        </div>
      </Grid>
  );
};

export default LoadingHome;
