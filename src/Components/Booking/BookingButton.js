import Button from "../UI/Button";
import "./Booking.css";

const BookingButton = (props) => {
  let selected = props.selectedSeats;

  const handleClick = (event) => {
    event.preventDefault();
    if (selected.includes(event.target.value))
      selected = selected.filter((item) => item !== event.target.value);
    else selected.push(event.target.value);

    console.log(selected);
    props.setSelected([...selected]);
  };

  return (
    <Button
      key={props.index}
      className={props.className}
      input={{
        onClick: handleClick,
        value: props.value,
      }}
    >
      {/* {props.value} */}
    </Button>
  );
};
export default BookingButton;
