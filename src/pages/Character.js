import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterDataByName, getCharacterQuote } from "../service/service";
import { Grid, makeStyles } from "@material-ui/core";
import Header from "../components/Header";
import CharacterInfo from "../components/CharacterInfo";
import LoadingCharacter from "../components/LoadingCharacter";
import CharacterImage from "../components/CharacterImage";
import CharacterQuote from "../components/CharacterQuote";
import GoRootButton from "../components/GoToRootButton";
import { useTranslation } from "react-i18next";
import Error from "../components/Error";
import { spacesInsteadPlusSign } from '../utils/utils'

const useStyles = makeStyles({
  grid: {
    paddingTop: "7em",
  },
});

const Character = () => {
  // state
  const [characterData, setCharacterData] = useState({});
  const [characterQuote, setCharacterQuote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // hooks
  const classes = useStyles();
  const { name } = useParams();
  const [t] = useTranslation("global");

  // component did mount alike
  useEffect(() => {
    setLoading(true);
    getData(name);
    getQuote(name);
  }, [name]);

  // get character full data by name
  const getData = async (name) => {
    const res = await getCharacterDataByName(name);
    if (res.data[0] && res.data[0].char_id) {
      setCharacterData(res.data[0]);
      setLoading(false)
    } else {
      setError(`${t("char.errormessage")} "${spacesInsteadPlusSign(name)}".`)
    }
  };

  // get quote by name
  const getQuote = async (name) => {
    const res = await getCharacterQuote(name);
    setCharacterQuote((res.data[0] && res.data[0].quote) || "");
    setLoading(false);
  };

  return (
    <>
      <Header />
      {!loading ? (<Grid container className={classes.grid}>
        <Grid item xs={false} sm={false} md={2} />
        {(characterData && !error) ? (
          <Grid item container xs={12} sm={12} md={8} spacing={4}>
            <CharacterImage characterData={characterData} />
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
        ) : (
          <Error errorMessage={error} />
        )}
      </Grid>) : (<LoadingCharacter />)}
    </>
  );
};

export default Character;
