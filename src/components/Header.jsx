import {
    makeStyles,
    AppBar,
    Toolbar,
    Typography
  } from "@material-ui/core";
  import { useNavigate } from "react-router-dom";
  
  const useStyles = makeStyles({
    title: {
      flexGrow: 1
    },
    bar: {
      backgroundColor: "#000"
      // backgroundColor: "#036e2f"
    },
    image: {
      width: "70px",
      height: "50px"
    }
  });
  
  const Header = () => {
    // hooks
    const classes = useStyles();
    const navigate = useNavigate();

    // return home
    const handleGoRoot = () => {
      console.log('NAVIGATE')
      navigate("/")
    }
  
    return (
      <AppBar className={classes.bar}>
          <Toolbar>
            <div onClick={() => handleGoRoot}>
            <img className={classes.image} src={'bblogo-sm.png'} alt="logo" /></div>
            <Typography variant="h6" className={classes.title}>
            </Typography>
            <Typography>Prueba Técnica @ atSistemas</Typography>
          </Toolbar>
        </AppBar>
    );
  };
  
  export default Header;
  