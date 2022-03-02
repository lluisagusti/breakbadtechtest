import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from '@material-ui/core'

const GoRootButton = () => {
  // hooks
  const [t] = useTranslation("global");
  const navigate = useNavigate();

  // return home
  const handleGoRoot = () => {
    navigate("/");
  };

  return (
    <>
      <Button variant="contained" onClick={handleGoRoot}>{t("char.go_to_root")}</Button>
    </>
  );
};

export default GoRootButton;
