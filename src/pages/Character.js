import { useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";
import CharacterInfo from "../components/CharacterInfo";
import LoadingCharacter from "../components/LoadingCharacter";
import CharacterImage from "../components/CharacterImage";
import CharacterQuote from "../components/CharacterQuote";
import GoRootButton from "../components/GoToRootButton";
import Error from "../components/Error";
import { spacesInsteadPlusSign } from '../utils/utils'
import useCharacter from "../hooks/useCharacter";

const Character = () => {

  // hooks
  const { name } = useParams();
  const { data, loading, error} = useCharacter(name);

  return (
    <>
      {!loading ? (
     <Grid container item xs={12}>
     {(data && !error) ? (
       <Grid item container xs={12} spacing={2}>
         <CharacterImage nickname={data.nickname} img={data.img} />
         <Grid container item xs={12} sm={6}>
           <CharacterInfo characterData={data} />
         </Grid>
           <Grid container item xs={12}>
             {name && <CharacterQuote
               characterName={name}
             />}
           </Grid>
         <Grid container item xs={12}>
           <GoRootButton />
         </Grid>
       </Grid>
     ) : (
       <Error errorName={`"${spacesInsteadPlusSign(name)}".`} primaryMessage={"errormessage"} secondaryMessage={"please_return_message"} />
     )}
   </Grid>) : (<LoadingCharacter />)}
    </>
  );
};

export default Character;


