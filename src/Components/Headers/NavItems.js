import { Routes, Route } from "react-router-dom";
import Viewdata from "../Details/ViewData";
import Movie from "../Movies/Movie";

import CreateMovie from "../Movies/createmovie";
import CreateTheater from "../Theater/CreateTheater";
import MapTheater from "../Theater/MapTheater";
import Booking from "../Booking/Booking";
import Login from "../login";
import Register from "../Register";
import { useState } from "react";
import Booked from "../Booking/booked";

const NavItems = (props) => {
  const [Token, setToken] = useState(sessionStorage.getItem("Token"));
  const Type = sessionStorage.getItem("Type");
  return (
    <Routes>
      <Route path="/" element={<Movie />} exact />
      <Route path="ViewData/:id" element={<Viewdata />} />
      <Route
        path="Movie"
        element={
          Token && Type === "Admin" ? (
            <CreateMovie />
          ) : (
            <Login setToken={setToken} />
          )
        }
      />
      <Route
        path="Theater"
        element={
          Token && Type === "Admin" ? (
            <CreateTheater />
          ) : (
            <Login setToken={setToken} />
          )
        }
      />
      <Route
        path="Mapping"
        element={
          Token && Type === "Admin" ? (
            <MapTheater />
          ) : (
            <Login setToken={setToken} />
          )
        }
      />
      <Route path="Booking/:id" element={<Booking />} />
      <Route path="Login" element={<Login />} />
      <Route path="Booked" element={<Booked />} />
      <Route path="Register" element={<Register />} />
    </Routes>
  );
};
export default NavItems;
