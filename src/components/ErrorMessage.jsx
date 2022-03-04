import { Grid, Typography, makeStyles } from "@material-ui/core";
import { textSpacing } from "../styles/styles";
import { useTranslation } from "react-i18next";
import ErrorTitle from "./ErrorTitle";

const useStyles = makeStyles({ textSpacing });

const ErrorMessage = ({ errorName, primaryMessage, secondaryMessage }) => {
  // hooks
  const classes = useStyles();
  const [t] = useTranslation("global");

  return (
    <Grid container item direction="column">
      <ErrorTitle />
      <Typography
        className={classes.textSpacing}
        align="center"
        variant="h6"
        component="div"
      >
        {errorName ? `${t(`errors.${primaryMessage}`)} ${errorName}` : `${t(`errors.${primaryMessage}`)}`}
      </Typography>
      <Typography
        className={classes.textSpacing}
        align="center"
        variant="body2"
      >
        {t(`errors.${secondaryMessage}`)}
      </Typography>
    </Grid>
  );
};

export default ErrorMessage;
