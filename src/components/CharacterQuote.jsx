import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { fixed_size_button } from "../styles/styles";
import Spinner from "./Spinner";
import useQuote from "../hooks/useQuote";

const useStyles = makeStyles({ fixed_size_button });

const CharacterQuote = ({ characterName }) => {

  // hooks
  const [t] = useTranslation("global");
  const classes = useStyles();
  const [{ quote, loading }, handleRecallGetQuote ] = useQuote(characterName);

  const handleRecallGet = () => {
    handleRecallGetQuote();
  }

  return (
    <>
    {quote && quote.length > 0 && (<TableContainer component={Paper}>
          <Table>
         <TableBody>
              <TableRow>
                <TableCell align="left">
                  <Button
                    variant="contained"
                    onClick={handleRecallGet}
                    className={classes.fixed_size_button}
                  >
                    {t("char.get_new_quote")}
                  </Button>
                </TableCell>
                {loading ? (
                  <TableCell align="right"> <Spinner /></TableCell>
                ) : (
                  <TableCell align="right">{quote}</TableCell>
                )}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>)}
        </>
  );
};

export default CharacterQuote;
