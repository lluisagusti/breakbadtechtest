import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  ListItemAvatar,
  Avatar,
  IconButton,
  Menu,
  MenuItem
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { flagUrl, logoUrl } from '../utils/utils'

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: "#000",
    // backgroundColor: "#036e2f"
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
  const navigate = useNavigate();
  const [t, i18n] = useTranslation("global");

  // return home wp alike
  const handleGoRoot = () => {
    navigate("/");
  };

  // nothin
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLanguage = lang => {
    localStorage.setItem("BreakingBadLanguage", lang);
    i18n.changeLanguage(lang)
    handleClose();
  }

  return (
    <AppBar className={classes.bar}>
      <Toolbar>
        <ListItemAvatar>
          <Avatar
            alt="logo"
            src={logoUrl}
            onClick={handleGoRoot}
          />
        </ListItemAvatar>
        <Typography variant="h6" className={classes.title}></Typography>
        <Typography>{t("header.technical_test")}</Typography>
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <img src={flagUrl} alt="language" height="25px" />
          </IconButton>
          <Menu
            id="menu-appbar"
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
            <MenuItem onClick={() => handleChangeLanguage("es")}>Español</MenuItem>
            <MenuItem onClick={() => handleChangeLanguage("en")}>English</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
