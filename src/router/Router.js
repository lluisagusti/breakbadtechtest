import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import Character from '../pages/Character'
import NotFound from '../pages/NotFound'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/characters/:name" element={<Character />}/>
        <Route exact path="/" element={<Home />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
