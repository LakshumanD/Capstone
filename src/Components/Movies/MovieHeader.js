import classes from "./MovieHeader.module.css";
import MoviesButton from "./MoviesButton";
const MovieHeader = (props) => {
  return (
    <>
      <div className={classes.h1}>
        <h1>
          {props.type === "Upcoming" ? "UPCOMING MOVIES" : "RELEASED MOVIES"}
        </h1>
        <div className={classes.span_left}></div>
        <span></span>
        <div className={classes.span_right}></div>
      </div>
      <MoviesButton handleClick={props.handleClick} type={props.type} />
    </>
  );
};
export default MovieHeader;
