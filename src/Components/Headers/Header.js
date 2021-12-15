import classes from "./Header.module.css";
import { Fragment } from "react";
import HeaderSignup from "./HeaderSignup";

import HeaderSearch from "./HeaderSearch";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>
          <Link to="/">Movie Booking App</Link>
        </h1>

        <HeaderSearch className={classes.search} />
        <HeaderSignup />
      </header>
    </Fragment>
  );
};
export default Header;
