import { useState } from "react";
import TopBanner from "../UI/TopBanner";
import MovieHeader from "./MovieHeader";
import MovieItem from "./MovieItms/MovieItem";
import Slider from "./Slider";

const Movie = () => {
  const [type, SetType] = useState("Upcoming");

  return (
    <TopBanner>
      <Slider />
      <MovieHeader handleClick={SetType} type={type} />
      <MovieItem type={type} />
    </TopBanner>
  );
};
export default Movie;
