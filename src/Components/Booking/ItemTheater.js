import { IoPhonePortraitOutline } from "react-icons/io5";
import Card from "../UI/Card";
import classes from "./ItemTheater.module.css";
import TheaterBook from "./TheaterBook";
const ItemTheater = () => {
  return (
    <Card className={classes.boxModel}>
      <div className={classes.boxLeft}>
        <div className={classes.text}>Ags Cinemas : Maduravoyal</div>
        <IoPhonePortraitOutline color="green" size={25} />
        <div className={classes.ticket}>M-Ticket</div>
      </div>
      <div className={classes.boxRight}>
        <TheaterBook />
      </div>
    </Card>
  );
};

export default ItemTheater;
