import classes from "./TopPanel.module.css";
import DetImage from "../../images/pic2.jpg";
import Image from "../UI/Image";
import Button from "../UI/Button";
const TopPanel = (props) => {
  return (
    <div className={classes.toppage}>
      <div className={classes.div}>
        <div className={classes.left}>
          <Image
            input={{ src: DetImage, alt: "Details", className: classes.img }}
          />
          <div className={classes.releaseText}>In cinimas</div>
        </div>
        <div className={classes.right}>
          <h1>Spider-Men: No Way Home </h1>
          <div className={classes.release}>Releasing on 16 Dec, 2021</div>

          <div className={classes.screen}>Tamil, English, Telugu, Kannada</div>
          <div className={classes.synopsis}>
            <h4>SYNOPSIS</h4>
            <span>
              For the first time in the cinematic history of Spider-Man, our
              friendly neighborhood hero is unmasked and no longer able to
              separate his normal life from the high-stakes of being a Super
              Hero. When he asks for help from Doctor Strange the stakes become
              even more dangerous, forcing him to discover what it truly means
              to be Spider-Man.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopPanel;
