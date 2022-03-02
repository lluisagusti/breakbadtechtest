import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { arrayString } from "../utils/utils";

const CharacterInfo = ({ characterData }) => {

    // props destructuring
    const {
      name,
      nickname,
      char_id,
      category,
      status,
      portrayed,
      birthday,
      occupation,
      appearance,
        better_call_saul_appearance,
      } = characterData;

    // hooks
    const [t] = useTranslation("global");

  return (
    <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
            <TableRow>
              <TableCell align="left">{t("char.name")}</TableCell>
              <TableCell align="right">{name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">{t("char.nickname")}</TableCell>
              <TableCell align="right">{nickname}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">{t("char.portrayed")}</TableCell>
              <TableCell align="right">{portrayed}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">{t("char.id")}</TableCell>
              <TableCell align="right">{char_id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">{t("char.category")}</TableCell>
              <TableCell align="right">{category}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">{t("char.birthday")}</TableCell>
              <TableCell align="right">{birthday}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">{t("char.occupation")}</TableCell>
              <TableCell align="right">{arrayString(occupation)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">{t("char.status")}</TableCell>
              <TableCell align="right">{status}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="left">{t("char.appearance")}</TableCell>
                <TableCell align="right">{arrayString(appearance)}</TableCell>
              </TableRow>
              {better_call_saul_appearance && better_call_saul_appearance.length > 0 && (<TableRow>
                <TableCell align="left">{t("char.better_call_saul_appearance")}</TableCell>
                <TableCell align="right">{arrayString(better_call_saul_appearance)}</TableCell>
              </TableRow>)}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default CharacterInfo;
