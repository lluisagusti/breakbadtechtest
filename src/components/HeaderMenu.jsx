import { Menu, MenuItem } from "@material-ui/core";

const HeaderMenu = ({handleChangeLanguage, selection, handleClose}) => {

  return (
    <Menu
    anchorEl={selection}
    anchorOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    keepMounted
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    open={Boolean(selection)}
    onClose={handleClose}
  >
    <MenuItem onClick={() => handleChangeLanguage("es")}>
      Español
    </MenuItem>
    <MenuItem onClick={() => handleChangeLanguage("en")}>
      English
    </MenuItem>
  </Menu>
  );
};

export default HeaderMenu;
