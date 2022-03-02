import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

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
      <button onClick={handleGoRoot}>{t("char.go_to_root")}</button>
    </>
  );
};

export default GoRootButton;
