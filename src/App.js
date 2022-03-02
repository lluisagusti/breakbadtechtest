import Router from "./router/Router";
import Header from "./components/Header";
import { Grid } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <Header />
      <Grid container style={{paddingTop: "7em"}}>
        <Grid item xs={false} sm={false} md={2}/>
        <Grid container item xs={12} sm={12} md={8}>
        <Router />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;