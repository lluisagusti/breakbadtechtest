import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { arrayString } from "../utils/utils";

const CharacterInfo = ({ characterData }) => {
  // hooks
  const [t] = useTranslation("global");

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

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell align="left">
                <strong>{t("char.name")}</strong>
              </TableCell>
              <TableCell align="right">{name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">
                <strong>{t("char.nickname")}</strong>
              </TableCell>
              <TableCell align="right">{nickname}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">
                <strong>{t("char.portrayed")}</strong>
              </TableCell>
              <TableCell align="right">{portrayed}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">
                <strong>{t("char.id")}</strong>
              </TableCell>
              <TableCell align="right">{char_id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">
                <strong>{t("char.category")}</strong>
              </TableCell>
              <TableCell align="right">{category}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">
                <strong>{t("char.birthday")}</strong>
              </TableCell>
              <TableCell align="right">{birthday}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">
                <strong>{t("char.occupation")}</strong>
              </TableCell>
              <TableCell align="right">{arrayString(occupation)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">
                <strong>{t("char.status")}</strong>
              </TableCell>
              <TableCell align="right">{status}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">
                <strong>{t("char.appearance")}</strong>
              </TableCell>
              <TableCell align="right">{arrayString(appearance)}</TableCell>
            </TableRow>
            {better_call_saul_appearance &&
              better_call_saul_appearance.length > 0 && (
                <TableRow>
                  <TableCell align="left">
                    <strong>{t("char.better_call_saul_appearance")}</strong>
                  </TableCell>
                  <TableCell align="right">
                    {arrayString(better_call_saul_appearance)}
                  </TableCell>
                </TableRow>
              )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CharacterInfo;
