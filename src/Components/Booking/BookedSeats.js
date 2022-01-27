import "./Booking.css";
const BookedSeats = (props) => {
  return (
    <>
      {props.Seats.map((item) => (
        <div className="seat">{item}</div>
      ))}
    </>
  );
};
export default BookedSeats;
