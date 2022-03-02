import {
    Typography,
    CardMedia,
    CardContent,
    CardActionArea,
    Card,
    makeStyles,
  } from "@material-ui/core";
  import { hollyImage } from "../utils/utils"
  
  // styles
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },    
    card: {
      margin: 2,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around"
    }
  });
  
  const CharacterCard = ({
    character,
    goToCharacterPage
  }) => {

    // hook
    const classes = useStyles();
    
    // destructuring required
    const { img, name, nickname } = character;

    return (
      <Card className={classes.card} onClick={() => goToCharacterPage({name})}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={nickname || "-"}
            height="300px"
            width="100px"
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
  