import { Grid, Typography, makeStyles } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { textSpacing } from '../styles/styles';

const useStyles = makeStyles({ textSpacing });

const ErrorApiLimit = () => {

  // hooks
  const classes = useStyles();
  const [t] = useTranslation("global");

  return (
    <>
      <Grid container item xs={12} direction="column">
        <Typography align="center" variant="h5" component="div">
          Error!
        </Typography>
        <Typography className={classes.textSpacing} align="center" variant="h6" component="div">
        {t("errors.api_limit_error")}
        </Typography>
        <Typography className={classes.textSpacing} align="center" variant="body2">
        {t("errors.sorry_message")}
        </Typography>
      </Grid>
    </>
  );
};

export default ErrorApiLimit;
