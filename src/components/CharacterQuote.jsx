import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";

const CharacterQuote = ({ characterQuote, getQuote, characterName }) => {
  // hooks
  const [t] = useTranslation("global");

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell align="left">
              <Button
                variant="contained"
                onClick={() => getQuote(characterName)}
                style={{
                  maxWidth: "10em",
                  maxHeight: "2.6em",
                  minWidth: "10em",
                  minHeight: "2.6em",
                }}
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
