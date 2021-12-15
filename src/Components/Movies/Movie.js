import TopBanner from "../UI/TopBanner";
import MovieHeader from "./MovieHeader";
import MovieItem from "./MovieItms/MovieItem";
import Slider from "./Slider";

const Movie = () => {
  return (
    <TopBanner>
      <Slider />
      <MovieHeader />
      <MovieItem />
    </TopBanner>
  );
};
export default Movie;
