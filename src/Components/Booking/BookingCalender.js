import { useEffect, useState } from "react";

import classes from "./BookingCalender.module.css";

const BookingCalender = () => {
  const [curDate, setCurDate] = useState([]);
  const data = [];
  useEffect(() => {
    var days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    for (var i = 0; i < 5; i++) {
      let cudate = new Date();

      cudate.setDate(cudate.getDate() + i);
      data.push({
        day:
          cudate.getDate() === new Date().getDate()
            ? "TODAY"
            : cudate.getDate() === new Date().getDate() + 1
            ? "TOM"
            : days[cudate.getDay()],
        date: cudate.getDate(),
      });
      setCurDate(data);
    }
    // console.log(data);
  }, [setCurDate]);
  return (
    <div className={classes.toppage}>
      {curDate.map((item, index) => (
        <div
          key={index}
          className={item.day === "TODAY" ? classes.active : classes.day}
        >
          <div> {item.date}</div>
          <div>{item.day}</div>
        </div>
      ))}
    </div>
  );
};
export default BookingCalender;
