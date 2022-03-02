import { CircularProgress, Grid } from "@material-ui/core";

const Loading = () => {

  const localImg = `walter-white-sm.png`;
  const remoteImg = `https://breakingbadapi.com/static/media/breaking_bad.6d275852.jpg`;
  
  return (
    <>
      <Grid container item alignContent="center" xs={12} direction="column">
        <img src={localImg || remoteImg} alt="breaking-bad-logo" />
        <div align="center">
          <CircularProgress color="inherit" />
        </div>
      </Grid>
    </>
  );
};

export default Loading;
