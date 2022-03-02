import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    margin: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  }
});

const CharacerImage = ({ img, nickname }) => {
  // hooks
  const classes = useStyles();

  return (
    <Grid container item xs={12} sm={6}>
      <div>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={nickname || "-"}
              height="auto"
              image={img || "walter-white-sm.png"}
            />
          </CardActionArea>
        </Card>
      </div>
    </Grid>
  );
};

export default CharacerImage;
