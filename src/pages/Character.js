import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterDataByName, getCharacterQuote } from "../service/service";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  card: {
    margin: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  grid: {
    paddingTop: "4em",
  },
});

const Character = () => {
  // state
  const [characterData, setCharacterData] = useState({});
  const [characterQuote, setCharacterQuote] = useState("");
  const [loading, setLoading] = useState(false);

  // hooks
  const classes = useStyles();
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getData(name);
    getQuote(name);
  }, [name]);

  // get character full data by name
  const getData = async (name) => {
    const res = await getCharacterDataByName(name);
    setCharacterData(res.data[0]);
    setLoading(false);
  };

  // get quote
  const getQuote = async (name) => {
    const res = await getCharacterQuote(name);
    setCharacterQuote((res.data[0] && res.data[0].quote) || "-");
    setLoading(false);
  };

  // return home
  const handleGoRoot = () => {
    navigate("/");
  };

  const {
    appearance,
    category,
    char_id,
    status,
    portrayed,
    img,
    nickname,
    // name,
    birthday,
    occupation,
    better_call_saul_appearance,
  } = characterData;

  return (
    <>
      <Header />
      <Grid container className={classes.grid}>


        <Grid item xs={false} sm={false} md={2} />

        {!loading ? <Grid item container xs={12} sm={12} md={8} spacing={4}>
          <Grid container item xs={12} sm={6}>
            <div>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={nickname || "-"}
                    height="auto"
                    image={img || "walter-white-sm.png"}
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
              <h5>
                Better Call Saul Appearance: {better_call_saul_appearance}
              </h5>
            </div>
          </Grid>

          <Grid container item xs={12}>
            <div>
              <h5>Quote: {characterQuote}</h5>
            </div>
            {characterQuote.length > 3 ? (
              <div>
                <button onClick={() => getQuote(name)}>Get New Quote</button>
              </div>
            ) : null}
          </Grid>

          <Grid item xs={12}>
            <div>
              <button onClick={handleGoRoot}>Go To Root</button>
            </div>
          </Grid>
        </Grid> : null}
      </Grid>
    </>
  );
};

export default Character;
