import Card from "../../UI/Card";
import MovieItemData from "./MovieItemData";
import Imagedata from "../../../images/pic1.jpg";
import classes from "./MovieItem.module.css";
import Image from "../../UI/Image";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieItem = (props) => {
  const [MoviesList, setMoviesList] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/Movies/`, {
        params: {
          Type: props.type,
        },
      })
      .then((resp) => {
        setMoviesList(resp.data);
      });
  }, [props.type, setMoviesList]);
  return (
    <div className={classes.movies}>
      {MoviesList.map((data, index) => (
        <Card key={index}>
          <Image
            input={{
              className: classes.image,
              src: Imagedata,
            }}
          />

          <MovieItemData data={data} />
        </Card>
      ))}
    </div>
  );
};
export default MovieItem;
