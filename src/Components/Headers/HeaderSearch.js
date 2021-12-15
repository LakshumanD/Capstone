import classes from "./HeaderSearch.module.css";
import { FcSearch } from "react-icons/fc";
import Input from "../UI/Input";
import { Fragment } from "react";
const HeaderSearch = () => {
  return (
    <Fragment>
      <Input
        className={classes.search}
        input={{ type: "text", placeholder: "Search Movies" }}
      />
      <button className={classes.searchButton} onClick={() => alert("clicked")}>
        <FcSearch size="30" color="black" />
      </button>
    </Fragment>
  );
};

export default HeaderSearch;
