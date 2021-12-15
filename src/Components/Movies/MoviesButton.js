import "../Movies/MoviesButton.css";

const MoviesButton = () => {
  return (
    <div className="prs_upcome_tabs_wrapper">
      <ul className="nav nav-tabs" role="tablist">
        <li role="presentation" className="active">
          <a
            aria-controls="best"
            role="tab"
            data-toggle="tab"
            aria-expanded="true"
          >
            Upcoming Movies
          </a>
        </li>
        <li role="presentation">
          <a
            aria-controls="hot"
            role="tab"
            data-toggle="tab"
            aria-expanded="false"
          >
            Relesed Movies
          </a>
        </li>
        <li role="presentation">
          <a
            aria-controls="trand"
            role="tab"
            data-toggle="tab"
            aria-expanded="false"
          >
            Best of library
          </a>
        </li>
      </ul>
    </div>
  );
};
export default MoviesButton;
