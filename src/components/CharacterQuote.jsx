import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";

const CharacterQuote = ({ characterQuote, getQuote, characterName }) => {
  // hooks
  const [t] = useTranslation("global");

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell align="left">
              <button onClick={() => getQuote(characterName)}>
                {t("char.get_new_quote")}
              </button>
            </TableCell>
            <TableCell align="right">{characterQuote}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CharacterQuote;
