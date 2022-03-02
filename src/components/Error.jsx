import { Grid, Typography, makeStyles } from "@material-ui/core";
import GoRootButton from "./GoToRootButton";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  errorSpacing: {
    paddingTop: "3em"
  }
});

const Error = ({ errorMessage }) => {

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
        {`${t("char.errormessage")} ${errorMessage}`}
        </Typography>
        <Typography className={classes.errorSpacing}  align="center" variant="body2">
        {t("char.please_return_message")}
        </Typography>
      </Grid>
      <Grid className={classes.errorSpacing} alignContent="center" container item xs={12} direction="column">
        <GoRootButton />
      </Grid>
    </>
  );
};

export default Error;
