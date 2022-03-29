import { TableRow, TableCell } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { characterInfoArray } from "../utils/utils";

const CharacterTableRow = ({ value, keyname, index }) => {
  console.log('value', value)
  console.log('keyname', keyname)
  console.log('index', index)
  // hooks
  const [t] = useTranslation("global");

  return (
    <>
      {keyname !== "img" && (
        <TableRow key={index}>
          <TableCell align="left">
            <strong>{t(`char.${keyname}`)}:</strong>
          </TableCell>
          <TableCell align="right">{characterInfoArray(value) || "No"}</TableCell>
        </TableRow>
      )}
    </>
  );
};

export default CharacterTableRow;
