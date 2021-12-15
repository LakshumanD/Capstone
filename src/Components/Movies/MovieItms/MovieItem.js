import Card from "../../UI/Card";
import MovieItemData from "./MovieItemData";
import Imagedata from "../../../images/pic1.jpg";
import classes from "./MovieItem.module.css";
import ImageData from "../../Data/ImageData";
import Image from "../../UI/Image";
import { Link } from "react-router-dom";

const MovieItem = () => {
  return (
    <div className={classes.movies}>
      {ImageData.map((data, index) => (
        <Card key={index}>
          <Link to="ViewData">
            <Image
              input={{
                className: classes.image,
                src: Imagedata,
              }}
            />
          </Link>
          <MovieItemData data={data} />
        </Card>
      ))}
    </div>
  );
};
export default MovieItem;
