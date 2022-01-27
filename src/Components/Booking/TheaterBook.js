import Button from "../UI/Button";
import styles from "./TheaterBook.module.css";
import { Link } from "react-router-dom";

const TheaterBook = (props) => {
  let Times = props.data.Theater.Timings.split(",").map((item) => item.trim());

  return (
    <div style={{ padding: "2px", display: "flex" }}>
      {Times.map((data, index) => (
        <Link to={`/Booking/${props.data._id}`}>
          <Button
            key={index}
            className={styles.button}
            disabled={props.data.Time !== data}
          >
            {data}
          </Button>
        </Link>
      ))}
    </div>
  );
};
export default TheaterBook;
