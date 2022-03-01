import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageA from '../pages/PageA'
import PageB from '../pages/PageB'
import PageC from '../pages/PageC'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/characters/:name" element={<PageB />}/>
        {/* <Route exact path="/characters/:id" element={<PageB />}/> */}
        <Route exact path="/" element={<PageA />}/>
        <Route path="*" element={<PageC />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
