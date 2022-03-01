import {
    makeStyles,
    AppBar,
    Toolbar,
    Typography
  } from "@material-ui/core";
  
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
    const classes = useStyles();
  
    return (
      <AppBar className={classes.bar}>
          <Toolbar>
            <img className={classes.image} src={"bblogo-sm.png"} alt="logo"/>
            <Typography variant="h6" className={classes.title}>
            </Typography>
            <Typography>Prueba Técnica @ atSistemas</Typography>
          </Toolbar>
        </AppBar>
    );
  };
  
  export default Header;
  