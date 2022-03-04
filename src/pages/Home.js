import CharacterCard from "../components/CharacterCard";
import { useNavigate } from "react-router-dom";
import { Grid, Hidden } from "@material-ui/core";
import { plusSignQuery } from "../utils/utils";
import LoadingHome from "../components/LoadingHome";
import PageNotFound from "../pages/NotFound";
import Error from "../components/Error";
import useCharacters from "../hooks/useCharacters";
import CharactersListElement from "../components/CharacterListElement";

const Home = () => {
  // hooks
  const { data, loading, error } = useCharacters();
  const navigate = useNavigate();

  // go to character
  const handleGoToCharacterPage = (character) => {
    const { name } = character;
    navigate(`/characters/${plusSignQuery(name)}`);
  };

  return (
    <>
      {loading && data.length === 0 ? (
        <LoadingHome />
      ) : (
        data.map((item, index) => {
          return (
            <Hidden key={index}>
              {/* view for xs screens   */}
              <Hidden smUp>
                <Grid container item>
                  <CharactersListElement xs={12} character={item} goToCharacterPage={handleGoToCharacterPage}
                  />
                </Grid>
              </Hidden>
              {/* view for other screen sizes */}
              <Hidden only={["xs"]}>
                <Grid container item sm={4} md={4} lg={3} xl={2}>
                  <CharacterCard character={item} goToCharacterPage={handleGoToCharacterPage}
                  />
                </Grid>
              </Hidden>
            </Hidden>
        )})
      )}
      {error && error.includes("default") && <PageNotFound />}
      {error && error.includes("429") && <Error primaryMessage={"api_limit_error"} secondaryMessage={"sorry_message"} />}
    </>
  );
};

export default Home;
