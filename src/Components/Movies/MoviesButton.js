import "../Movies/MoviesButton.css";
// import Button from "../UI/Button";
const MoviesButton = (props) => {
  const handleClick = (event) => {
    props.handleClick(event.target.value);
  };
  return (
    <div className="prs_upcome_tabs_wrapper">
      <ul className="nav nav-tabs" role="tablist">
        <li
          role="presentation"
          className={props.type === "Upcoming" ? "active" : ""}
        >
          <button onClick={handleClick} value="Upcoming">
            Upcoming Movies
          </button>
        </li>

        <li
          role="presentation"
          className={props.type === "Released" ? "active" : ""}
        >
          <button onClick={handleClick} value="Released">
            Released Movies
          </button>
        </li>
      </ul>
    </div>
  );
};
export default MoviesButton;
