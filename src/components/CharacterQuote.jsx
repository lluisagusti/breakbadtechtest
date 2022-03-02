import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button
} from "@material-ui/core";
import { useTranslation } from "react-i18next";


const CharacterQuote = ({ characterQuote, getQuote, characterName }) => {
  // hooks
  const [t] = useTranslation("global");

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell align="left"  colSpan={1}>
                <Button
                  variant="contained"
                  component="span"
                  size="medium"
                  onClick={() => getQuote(characterName)}
                  height="50px"
                  width="100px"
                  style={{maxWidth: '10em', maxHeight: '3em', minWidth: '10em', minHeight: '3em'}}
                >
                  {t("char.get_new_quote")}
                </Button>
              </TableCell>
              <TableCell align="right" colSpan={2}>{characterQuote}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CharacterQuote;
