import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
  Avatar,
  Divider,
} from "@material-ui/core";
import { hollyImage } from "../utils/utils";

const CharactersListElement = ({ character, goToCharacterPage }) => {
  // destructuring required
  const { img, name, nickname } = character;

  return (
    <>
      <TableContainer component={Paper} onClick={() => goToCharacterPage({ name })}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell align="right">
                <Avatar
                  alt={nickname || "-"}
                  src={hollyImage(img) || "walter-white-sm.png"}
                />
              </TableCell>
              <TableCell align="right">
                <Typography gutterBottom variant="h6">
                  {name}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Divider variant="middle" />
    </>
  );
};

export default CharactersListElement;
