import { useEffect, useState } from "react";
import { getAllCharacters } from "../service/service";
import CharacterCard from "../components/CharacterCard";
import { useNavigate } from "react-router-dom";
import { Grid, makeStyles } from "@material-ui/core";
import Header from "../components/Header";

const useStyles = makeStyles({
  grid: {
    paddingTop: '4em'
  }
});


const PageA = () => {
  // state
  const [data, setData] = useState([]);

  // hooks
  const navigate = useNavigate();
  const classes = useStyles();

  useEffect(() => {
    getData();
  }, []);

  // get characters
  const getData = async () => {
    const res = await getAllCharacters();
    setData(res.data);
  };

  // go to character
  const handleGoToCharacterPage = (character) => {
    const { name } = character;
    navigate(`/characters/${name.replace(/\s+/g, "+")}`);
  };

  return (
    <>
      <Header />
      <Grid container className={classes.grid}>
        <Grid item xs={false} sm={false} md={2} pt={8}/>
        <Grid item container xs={12} sm={12} md={8} spacing={4} pt={8}>
          {data.map((item, index) => {
            return (
              <Grid item key={index} xs={6} sm={4} md={4} lg={3} xl={2} pt={8}>
                <CharacterCard
                  character={item}
                  goToCharacterPage={handleGoToCharacterPage}
                />
              </Grid>
            );
          })}
        </Grid>
        <Grid item xs={false} sm={2} pt={6}/>
      </Grid>
    </>
  );
};

export default PageA;
