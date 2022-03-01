import { useEffect, useState } from "react";
import { getCharacterDataByName, getCharacterQuote } from "../service/service";
import { Grid, Card, CardActionArea, CardMedia, makeStyles } from "@material-ui/core";
import Header from "../components/Header";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
card: {
    margin: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  grid: {
    paddingTop: '4em'
  }
});

const PageB = () => {
  // state
  const [characterData, setCharacterData] = useState({});
  const [characterQuote, setCharacterQuote] = useState("");

  // hooks
  const classes = useStyles();

  useEffect(() => {
    getData();
    getQuote();
  }, []);

  // get character full data by name
  const getData = async () => {
    const res = await getCharacterDataByName("Walter+White");
    setCharacterData(res.data[0]);
  };

  // get quote
  const getQuote = async () => {
    const res = await getCharacterQuote("Walter+White");
    setCharacterQuote(res.data[0].quote);
  };

  const {
    appearance,
    category,
    char_id,
    status,
    portrayed,
    img,
    nickname,
    name,
    birthday,
    occupation,
    better_call_saul_appearance,
  } = characterData;

  return (
    <>
    <Header />
    <Grid container className={classes.grid}>
    <Grid item xs={false} sm={false} md={2} pt={8}/>
    <Grid  item container xs={12} sm={12} md={8} spacing={4} pt={8}>
      <Grid container item xs={12} sm={6}>
        <div>
          <Card
            className={classes.card}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                alt={nickname || "-"}
                height="auto"
                image={img || "bblogo.png"}
                title={nickname || "-"}
              />
            </CardActionArea>
          </Card>
        </div>
      </Grid>


      <Grid container item xs={12} sm={6}>
        <div>
          <h5>Name: {name}</h5>
          <h5>Nickname: {nickname}</h5>
          <h5>Portrayed: {portrayed}</h5>
          <h5>Id: {char_id}</h5>
          <h5>Category: {category}</h5>
          <h5>Birthday: {birthday}</h5>
          <h5>Occupation: {occupation}</h5>
          <h5>Status: {status}</h5>
          <h5>Appearance: {appearance}</h5>
          <h5>Better Call Saul Appearance: {better_call_saul_appearance}</h5>
        </div>
      </Grid>

      
      <Grid item xs={12}>
        <div>
          <h5>Quote: {characterQuote}</h5>
        </div>
      </Grid>
      </Grid>

      
      </Grid>
    </>
  );
};

export default PageB;
