import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
  makeStyles
} from "@material-ui/core";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  fixed_size_button: {
    maxWidth: "10em",
    maxHeight: "2.6em",
    minWidth: "10em",
    minHeight: "2.6em",
  }
});


const CharacterQuote = ({ characterQuote, getQuote, characterName }) => {
  
  // hooks
  const [t] = useTranslation("global");
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell align="left">
              <Button
                variant="contained"
                onClick={() => getQuote(characterName)}
               className={classes.fixed_size_button}
              >
                {t("char.get_new_quote")}
              </Button>
            </TableCell>
            <TableCell align="right">{characterQuote}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CharacterQuote;