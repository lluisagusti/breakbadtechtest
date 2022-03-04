import { Grid, makeStyles } from "@material-ui/core";
import GoRootButton from "./GoToRootButton";
import { textSpacing } from "../styles/styles";
import ErrorMessage from "./ErrorMessage";

const useStyles = makeStyles({ textSpacing });

const Error = ({ errorName, primaryMessage, secondaryMessage }) => {
  // hooks
  const classes = useStyles();

  return (
    <>
    <ErrorMessage errorName={errorName} primaryMessage={primaryMessage} secondaryMessage={secondaryMessage} />
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
