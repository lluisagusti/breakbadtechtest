import { Grid, Typography } from "@material-ui/core";
  
  const ErrorMessage = ({ prop }) => {

    prop && console.log('prop @ ErrorMessage  >> ', prop)
  
    return (
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
    );
  };
  
  export default ErrorMessage;
  
  
  
