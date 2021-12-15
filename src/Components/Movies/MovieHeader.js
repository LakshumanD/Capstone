import classes from "./MovieHeader.module.css";
import MoviesButton from "./MoviesButton";
const MovieHeader = () => {
  return (
    <>
      <div className={classes.h1}>
        <h1>UPCOMING MOVIES</h1>
        <div className={classes.span_left}></div>
        <span></span>
        <div className={classes.span_right}></div>
      </div>
      <MoviesButton />
    </>
  );
};
export default MovieHeader;
