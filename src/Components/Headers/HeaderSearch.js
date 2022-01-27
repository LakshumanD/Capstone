import classes from "./HeaderSearch.module.css";
import { FcSearch } from "react-icons/fc";
import Input from "../UI/Input";
import { Fragment } from "react";
import { Link } from "react-router-dom";
const HeaderSearch = (props) => {
  const Token = props.Token;
  const Type = props.Type;
  return (
    <Fragment>
      <nav className={classes.search}>
        {Token && Type === "Admin" && (
          <>
            <Link to="/Movie">Create Movie</Link>
            <Link to="/Theater">Create Theater</Link>
            <Link to="/Mapping">Allocate Movie / Theater</Link>
          </>
        )}
        <Link to="/Login">Sign Up</Link>
      </nav>
    </Fragment>
  );
};

export default HeaderSearch;
