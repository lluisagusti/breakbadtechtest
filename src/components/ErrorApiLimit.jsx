import { Grid, Typography, makeStyles } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  errorSpacing: {
    paddingTop: "3em"
  }
});

const ErrorApiLimit = () => {

  // hooks
  const classes = useStyles();
  const [t] = useTranslation("global");

  return (
    <>
      <Grid container item alignContent="center" xs={12} direction="column">
        <Typography align="center" variant="h5" component="div">
          Error!
        </Typography>
        <Typography className={classes.errorSpacing} align="center" variant="h6" component="div">
        {t("errors.api_limit_error")}
        </Typography>
        <Typography className={classes.errorSpacing} align="center" variant="body2">
        {t("errors.sorry_message")}
        </Typography>
      </Grid>
    </>
  );
};

export default ErrorApiLimit;
