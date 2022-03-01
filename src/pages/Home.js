import { useEffect, useState } from "react";
import { getAllCharacters } from "../service/service";
import CharacterCard from "../components/CharacterCard";
import { useNavigate } from "react-router-dom";
import { Grid, makeStyles } from "@material-ui/core";
import Header from "../components/Header";
import { plusSignQuery } from "../utils/utils";
import Loading from "../components/Loading";

const useStyles = makeStyles({
  grid: {
    paddingTop: '4em'
  }
});


const Home = () => {
  // state
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // hooks
  const navigate = useNavigate();
  const classes = useStyles();

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  // get characters
  const getData = async () => {
    const res = await getAllCharacters();
    if (res.status === 429) setError("You'll be able to access again after 24 hours")
    setData(res.data);
    setLoading(false);
  };

  // go to character
  const handleGoToCharacterPage = (character) => {
    const { name } = character;
    navigate(`/characters/${plusSignQuery(name)}`);
  };

  return (
    <>
      <Header />
      <Grid container className={classes.grid}>
        <Grid item xs={false} sm={false} md={2} pt={8}/>
        <Grid item container xs={12} sm={12} md={8} spacing={4} pt={8}>
          {loading ? (<Loading />) : (data.map((item, index) => {
            return (
              <Grid item key={index} xs={6} sm={4} md={4} lg={3} xl={2} pt={8}>
                <CharacterCard
                  character={item}
                  goToCharacterPage={handleGoToCharacterPage}
                />
              </Grid>
            );
          }))}
        </Grid>
        <Grid item xs={false} sm={2} pt={6}/>
      </Grid>
    </>
  );
};

export default Home;
