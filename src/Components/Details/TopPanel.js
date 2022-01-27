import classes from "./TopPanel.module.css";
import DetImage from "../../images/pic2.jpg";
import Image from "../UI/Image";
import { useEffect, useState } from "react";
import axios from "axios";

const TopPanel = (props) => {
  let [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/Movies/byID`, {
          params: {
            newID: props.argData,
          },
        })

        .then((resp) => {
          //console.log(resp.data);
          setData(resp.data);
        });
    };
    fetchData();
  }, []);

  return (
    <div className={classes.toppage}>
      <div className={classes.div}>
        <div className={classes.left}>
          <Image
            input={{ src: DetImage, alt: "Details", className: classes.img }}
          />
          <div className={classes.releaseText}></div>
        </div>
        <div className={classes.right}>
          <h1>{data && data.Name} </h1>
          <div className={classes.release}>
            {data &&
              `Release Date :  ${new Date(
                data.ReleaseDate
              ).getDate()},  ${new Date(data.ReleaseDate).getFullYear()}`}
          </div>

          <div className={classes.screen}>{data && data.Languages}</div>
          <div className={classes.synopsis}>
            <h4>{"SYNOPSIS"}</h4>
            <span>{data && data.Synopsis}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopPanel;
