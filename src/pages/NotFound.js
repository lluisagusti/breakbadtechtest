import { Grid, makeStyles, Typography } from "@material-ui/core";
import GoRootButton from "../components/GoToRootButton";
import { useTranslation } from "react-i18next";
import { mainSpacing, textSpacing } from "../styles/styles";
import { remoteImg, notFoundSize } from "../constants/constants";

const useStyles = makeStyles({ mainSpacing, textSpacing });

const NotFound = () => {
  // hooks
  const classes = useStyles();
  const [t] = useTranslation("global");

  return (
    <>

      <Grid container item alignContent="center" xs={12} direction="column">
        <img
          src={remoteImg}
          alt="better-call-saul-logo"
          height={notFoundSize}
          width={notFoundSize}
        />
        <Typography align="center" variant="h5" component="div">
          {t("errors.page_not_found")}
        </Typography>
      </Grid>


      <Grid
        className={classes.textSpacing}
        align="center"
        container
        item
        xs={12}
        direction="column"
      >
        <Typography
          align="center"
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
