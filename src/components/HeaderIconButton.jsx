import { IconButton } from "@material-ui/core";
import { flagUrl, flagSize } from "../constants/constants";

const HeaderIconButton = ({handleMenu}) => {

  return (
    <IconButton
    size="small"
    aria-haspopup="true"
    onClick={handleMenu}
    color="inherit"
  >
    <img src={flagUrl} alt="language" height={flagSize} />
  </IconButton>
  );
};

export default HeaderIconButton;
