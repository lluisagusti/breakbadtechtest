import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  ListItemAvatar,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { flagUrl, logoUrl } from "../utils/utils";

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: "#000",
  },
  image: {
    width: "70px",
    height: "50px",
  },
});

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  // hooks
  const classes = useStyles();
  const [t, i18n] = useTranslation("global");

  // captures manu selection
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // close menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  // change language
  // set @ localstorage
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("BreakingBadLanguage", lang);
    handleClose();
  };

  return (
    <AppBar className={classes.bar}>
      <Toolbar>
        <ListItemAvatar>
          <Avatar alt="logo" src={logoUrl} />
        </ListItemAvatar>
        <Typography className={classes.title}>
          {t("header.technical_test")}
        </Typography>
        <IconButton
          size="small"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <img src={flagUrl} alt="language" height="25px" />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleChangeLanguage("es")}>
            Español
          </MenuItem>
          <MenuItem onClick={() => handleChangeLanguage("en")}>
            English
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
