import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderIconButton from "./HeaderIconButton";
import HeaderMenu from "./HeaderMenu";
import { title, bar } from '../styles/styles'

const useStyles = makeStyles({title, bar});



const Header = () => {
  const [selection, setSelection] = useState(null);

  // hooks
  const classes = useStyles();
  const [t, i18n] = useTranslation("global");

  // captures manu selection
  const handleMenu = (event) => {
    setSelection(event.currentTarget);
  };

  // close menu
  const handleClose = () => {
    setSelection(null);
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
        <HeaderLogo />
        <Typography className={classes.title}>
          {t("header.technical_test")}
        </Typography>
        <HeaderIconButton handleMenu={handleMenu} />
        <HeaderMenu
          handleChangeLanguage={handleChangeLanguage}
          selection={selection}
          handleClose={handleClose}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
