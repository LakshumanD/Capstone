import classes from "./TopBanner.module.css";
const TopBanner = (props) => {
  return <div className={classes.top}>{props.children}</div>;
};
export default TopBanner;
