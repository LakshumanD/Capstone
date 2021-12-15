import classes from "./MovieItemData.module.css";
import ReactStars from "react-rating-stars-component";
import { IoCart } from "react-icons/io5";
const MovieItemData = (props) => {
  return (
    <div className={classes.moviedetails}>
      <div className={classes.div}>
        <span className={classes.title}>{props.data.title}</span>
        <span className={classes.description}>{props.data.description}</span>
        <ReactStars
          count={5}
          size={16}
          activeColor="#ff4444"
          edit={false}
          value={props.data.rating}
        />
      </div>
      <div className={classes.button}>
        <span className={classes.actions}>
          <IoCart size={30} color="#ff4444" />
        </span>
      </div>
    </div>
  );
};
export default MovieItemData;
