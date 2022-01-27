import { useEffect, useState } from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import Card from "../UI/Card";
import classes from "./ItemTheater.module.css";
import TheaterBook from "./TheaterBook";
import axios from "axios";

const ItemTheater = (props) => {
  const [theater, setTheater] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/MapTheater/byMovieID`, {
        params: {
          MovieID: props.argData,
          Date: new Date(),
        },
      })
      .then((resp) => {
        console.log(resp.data);
        setTheater(resp.data);
      });
  }, [setTheater]);
  return (
    <>
      {theater &&
        theater.map((data, index) => (
          <Card className={classes.boxModel} key={index}>
            <div className={classes.boxLeft}>
              <div className={classes.text}>{data.Theater.Name}</div>
              <IoPhonePortraitOutline color="green" size={25} />
              <div className={classes.ticket}>M-Ticket</div>
            </div>
            <div className={classes.boxRight}>
              <TheaterBook
                key={index}
                data={data}
                // Timings={data.Theater.Timings}
                // time={data.Time}
                // TheaterName={data.Theater.Name}
                // MovieName={data.Movies.Name}
              />
            </div>
          </Card>
        ))}
    </>
  );
};

export default ItemTheater;
