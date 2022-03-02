import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterDataByName, getCharacterQuote } from "../service/service";
import { Grid, makeStyles } from "@material-ui/core";
import Header from "../components/Header";
import CharacterInfo from "../components/CharacterInfo";
import CharacterImage from "../components/CharacterImage";
import CharacterQuote from "../components/CharacterQuote";
import GoRootButton from "../components/GoToRootButton";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
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

  // component did mount alike
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

  // get quote by name
  const getQuote = async (name) => {
    const res = await getCharacterQuote(name);
    setCharacterQuote((res.data[0] && res.data[0].quote) || "");
    setLoading(false);
  };

  const { img, nickname } = characterData;

  return (
    <>
      <Header />
      <Grid container className={classes.grid}>
        <Grid item xs={false} sm={false} md={2} />
        {!loading ? (
          <Grid item container xs={12} sm={12} md={8} spacing={4}>
            <CharacterImage img={img} nickname={nickname} />
            <Grid container item xs={12} sm={6}>
              <CharacterInfo characterData={characterData} />
            </Grid>
            {characterQuote && (
              <Grid container item xs={12}>
                <CharacterQuote
                  characterName={characterData.name}
                  characterQuote={characterQuote}
                  getQuote={getQuote}
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <GoRootButton />
            </Grid>
          </Grid>
        ) : null}
      </Grid>
    </>
  );
};

export default Character;
