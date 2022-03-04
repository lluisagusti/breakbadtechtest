import {
  TableContainer,
  Table,
  TableBody,
  Paper,
} from "@material-ui/core";

import { removeIdBtcAndImg } from "../utils/utils";
import CharacterTableRow from "./CharacterTableRow";

const CharacterInfo = ({ characterData }) => {

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {Object.entries(removeIdBtcAndImg(characterData)).map(([keyname, value], index) => (
            <CharacterTableRow value={value} keyname={keyname} key={index} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CharacterInfo;
