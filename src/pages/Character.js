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
import { useTranslation } from "react-i18next";
import CharacterInfo from "../components/CharacterInfo";
import Loading from "../components/Loading";

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
    paddingTop: "7em",
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
  const [t, i18n] = useTranslation("global");

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

  const { img, nickname } = characterData;

  return (
    <>
      <Header />
      <Grid container className={classes.grid}>
        <Grid item xs={false} sm={false} md={2} />
        {!loading ? (
          <Grid item container xs={12} sm={12} md={8} spacing={4}>
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
                <CharacterInfo characterData={characterData} />
              </div>
            </Grid>
            <Grid container item xs={12}>
              <div>
                <h5>
                  {t("char.quote")}: {characterQuote}
                </h5>
              </div>
              {characterQuote.length > 3 ? (
                <div>
                  <button onClick={() => getQuote(name)}>
                    {t("char.get_new_quote")}
                  </button>
                </div>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <div>
                <button onClick={handleGoRoot}>{t("char.go_to_root")}</button>
              </div>
            </Grid>
          </Grid>
        ) : <Loading />}
      </Grid>
    </>
  );
};

export default Character;
