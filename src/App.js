import RouterRender from "./RouterRender";
import Header from "./components/Header";
import { Grid } from "@material-ui/core";
import "./styles/styles.css";

const App = () => {
  return (
    <>
      <Header />
      <Grid container className="layout">
        <Grid item md={2} />
        <Grid container item xs={12} sm={12} md={8}>
          <RouterRender />
          {/* <Router /> */}
        </Grid>
      </Grid>
    </>
  );
};

export default App;
