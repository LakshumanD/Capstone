import classes from "./MovieItemData.module.css";
import ReactStars from "react-rating-stars-component";
import { IoTicket } from "react-icons/io5";
import { Link } from "react-router-dom";
const MovieItemData = (props) => {
  return (
    <div className={classes.moviedetails} key={props.data._id}>
      <div className={classes.div}>
        <span className={classes.title}>{props.data.Name}</span>
        <span className={classes.description}>{props.data.Description}</span>
        {props.data.Type === "Released" ? (
          <ReactStars
            count={5}
            size={16}
            activeColor="#ff4444"
            edit={false}
            value={parseInt(props.data.Rating)}
          />
        ) : (
          ""
        )}
      </div>
      <div className={classes.button}>
        <span className={classes.actions}>
          <Link to={`/viewdata/${props.data._id}`}>
            <IoTicket size={30} color="#ff4444" title="Book Tickets" />
          </Link>{" "}
        </span>
      </div>
    </div>
  );
};
export default MovieItemData;
