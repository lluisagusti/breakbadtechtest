import { Grid, Typography, makeStyles } from "@material-ui/core";
import GoRootButton from "./GoToRootButton";
import { useTranslation } from "react-i18next";
import { textSpacing } from "../styles/styles";

const useStyles = makeStyles({ textSpacing });

const Error = ({ errorMessage }) => {
  // hooks
  const classes = useStyles();
  const [t] = useTranslation("global");

  return (
    <>
      <Grid container item direction="column">
        <Typography align="center" variant="h5" component="div">
          Error!
        </Typography>
        <Typography className={classes.textSpacing} align="center" variant="h6" component="div">
        {`${t("errors.errormessage")} ${errorMessage}`}
        </Typography>
        <Typography className={classes.textSpacing} align="center" variant="body2">
        {t("errors.please_return_message")}
        </Typography>
      </Grid>
      <Grid
        className={classes.textSpacing}
        alignContent="center"
        container
        item
        direction="column"
      >
        <GoRootButton />
      </Grid>
    </>
  );
};

export default Error;
