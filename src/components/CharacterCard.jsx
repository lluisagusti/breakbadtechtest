import {
    Typography,
    CardMedia,
    CardContent,
    CardActionArea,
    Card,
    makeStyles,
  } from "@material-ui/core";
  
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
    const { img, name, nickname } = character;
    const classes = useStyles();
  
    // if (img.includes("Tumblr_lqddc79K9S1qc5omm")) console.log('img --> ', img)
  
    return (
      <Card className={classes.card} onClick={() => goToCharacterPage({name})}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={nickname || "-"}
            height="300px"
            width="100px"
            image={img || "walter-white-sm.png"}
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
  