import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

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
  // hooks
  const classes = useStyles();
  const navigate = useNavigate();

  // return home wp alike
  const handleGoRoot = () => {
    navigate("/");
  };

  return (
    <AppBar className={classes.bar}>
      <Toolbar>
        <ListItemAvatar>
          <Avatar
            alt="logo"
            src={
              "https://breakingbadapi.com/static/media/breaking_bad.6d275852.jpg"
            }
            onClick={handleGoRoot}
          />
        </ListItemAvatar>
        <Typography variant="h6" className={classes.title}></Typography>
        <Typography>Prueba Técnica @ atSistemas</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
