import {
  Typography,
  CardMedia,
  CardContent,
  CardActionArea,
  Card,
  makeStyles,
} from "@material-ui/core";
import { card } from "../styles/styles";
import { hollyImage } from "../utils/utils";

const useStyles = makeStyles({ card });

const CharacterCard = ({ character, goToCharacterPage }) => {

  // hooks
  const classes = useStyles();

  // destructuring required
  const { img, name, nickname } = character;

  return (
    <Card className={classes.card} onClick={() => goToCharacterPage({ name })}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={nickname || "-"}
          height="auto"
          image={hollyImage(img) || "walter-white-sm.png"}
          title={nickname || "-"}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {nickname}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CharacterCard;
