import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterDataByName, getCharacterQuote } from "../service/service";
import { Grid } from "@material-ui/core";
import CharacterInfo from "../components/CharacterInfo";
import LoadingCharacter from "../components/LoadingCharacter";
import CharacterImage from "../components/CharacterImage";
import CharacterQuote from "../components/CharacterQuote";
import GoRootButton from "../components/GoToRootButton";
import Error from "../components/Error";
import { spacesInsteadPlusSign } from '../utils/utils'

const Character = () => {
  // state
  const [characterData, setCharacterData] = useState({});
  const [characterQuote, setCharacterQuote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // hooks
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
    if (res.data[0] && res.data[0].char_id) {
      setCharacterData(res.data[0]);
      setLoading(false)
    } else {
      setLoading(false)
      setError(`"${spacesInsteadPlusSign(name)}".`)
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
      {!loading ? (
      <Grid container item xs={12}>
        {(characterData && !error) ? (
          <Grid item container xs={12} spacing={2}>
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
