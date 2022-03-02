import { Grid, makeStyles, Typography } from "@material-ui/core";
import GoRootButton from "../components/GoToRootButton";
import { useTranslation } from "react-i18next";

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
  const [t] = useTranslation("global")

  const remoteImg = `https://breakingbadapi.com/static/media/button.166e4f54.jpg`;

  return (
    <>
      <Grid
        className={classes.mainSpacing}
        container
        item
        alignContent="center"
        xs={12}
        direction="column"
      >
        <img
          src={remoteImg}
          alt="breaking-bad-logo"
          height={"250px"}
          width={"250px"}
        />
        <Typography align="center" variant="h5" component="div">
        {t("errors.page_not_found")}
        </Typography>
      </Grid>
      <Grid
        className={classes.textSpacing}
        alignContent="center"
        container
        item
        xs={12}
        direction="column"
      >
        <Typography
          alignContent="center"
          className={classes.textSpacing}
          variant="h6"
        >
         {t("errors.please_return_message")}
        </Typography>
      </Grid>
      <Grid
        className={classes.textSpacing}
        alignContent="center"
        container
        item
        xs={12}
        direction="column"
      >
        <GoRootButton />
      </Grid>
    </>
  );
};

export default NotFound;
