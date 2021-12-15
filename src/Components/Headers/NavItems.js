import { Routes, Route } from "react-router-dom";
import Viewdata from "../Details/ViewData";
import Movie from "../Movies/Movie";

const NavItems = () => {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<Movie />} exact />
      <Route path="ViewData" element={<Viewdata />} />
    </Routes>
    // </BrowserRouter>
  );
};
export default NavItems;
