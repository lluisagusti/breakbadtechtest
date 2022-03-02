import { useEffect, useState } from "react";
import { getAllCharacters } from "../service/service";
import CharacterCard from "../components/CharacterCard";
import { useNavigate } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { plusSignQuery } from "../utils/utils";
import LoadingHome from "../components/LoadingHome";
import PageNotFound from "../pages/NotFound"
import ErrorApiLimit from "../components/ErrorApiLimit";

const Home = () => {
  // state
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorApiLimit, setErrorApiLimit] = useState(false);

  // hooks
  const navigate = useNavigate();

  // very similar to component did mount
  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  // get characters
  const getData = async () => {
    const res = await getAllCharacters();
    if (res.status === 429) {
      setLoading(false);
      setErrorApiLimit(true);
    } else {
      res.data.length > 0 && setData(res.data);
      res.data.length === 0 && setError(true)
      setLoading(false);
    }
  };

  // go to character
  const handleGoToCharacterPage = (character) => {
    const { name } = character;
    navigate(`/characters/${plusSignQuery(name)}`);
  };

  return (
    <>
          {loading ? (<LoadingHome />) : (data.map((item, index) => {
            return (
              <Grid item key={index} xs={6} sm={4} md={4} lg={3} xl={2}>
                <CharacterCard
                  character={item}
                  goToCharacterPage={handleGoToCharacterPage}
                />
              </Grid>
            );
          }))}
          {error ? <PageNotFound /> : null}
          {errorApiLimit ? <ErrorApiLimit /> : null}
    </>
  );
};

export default Home;
