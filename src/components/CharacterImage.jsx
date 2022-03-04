import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
import { card_character } from '../styles/styles'
import { hollyImage } from "../utils/utils";

const useStyles = makeStyles({ card_character });

const CharacerImage = ({ img, nickname }) => {
  // hooks
  const classes = useStyles();

  return (
    <Grid container item xs={12} sm={6}>
      <div>
        <Card className={classes.card_character}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={nickname || "-"}
              height="auto"
              image={hollyImage(img) || "walter-white-sm.png"}
            />
          </CardActionArea>
        </Card>
      </div>
    </Grid>
  );
};

export default CharacerImage;
