import "./Booking.css";
import { Box } from "@material-ui/core";
const BookedMovie = (props) => {
  //   const movieDate = new Date(props.data.Date).toString().split(" ");
  const CurDate = new Date().toString().split(" ");
  return (
    <Box>
      <h1>{props.data.Movies.Name}</h1>
      <div className="theater">THEATERS</div>
      <div>{props.data.Theater.Name}</div>

      <div className="theater">SHOW TIME</div>
      <div>{`${CurDate[1]}, ${CurDate[0]}  ${CurDate[2]} ${props.data.Time}`}</div>
    </Box>
  );
};
export default BookedMovie;
