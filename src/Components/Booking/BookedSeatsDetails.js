import "./Booking.css";
const BookedSeatsDetails = (props) => {
  const noofseats = props.Seats.length;
  const price = 160.0;
  var currency = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(noofseats * price);

  return (
    <>
      <div>{`${noofseats} Seat(s)           `}</div>
      <div className="price"> {currency}</div>
    </>
  );
};
export default BookedSeatsDetails;
