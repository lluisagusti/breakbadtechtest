import { ListItemAvatar, Avatar } from "@material-ui/core";
import { logoUrl } from "../constants/constants";

const HeaderLogo = () => {

  return (
    <ListItemAvatar>
    <Avatar alt="logo" src={logoUrl} />
  </ListItemAvatar>
  );
};

export default HeaderLogo;
