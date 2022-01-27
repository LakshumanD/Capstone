import TopBanner from "../UI/TopBanner";
import { Box, TextField, Button, MenuItem } from "@material-ui/core";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

import axios from "axios";
import { useEffect, useState } from "react";
const MapTheater = () => {
  const [state, setState] = useState({
    Time: "",
    Theater: "",
    Movies: "",
    AvlSeats: 0,
    AllocSeats: 0,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [MovieDate, setMovieDate] = useState(null);

  const [Theaters, setTheaters] = useState([{ Name: {}, Timings: [] }]);
  const [MoviesList, setMoviesList] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/Theater/`).then((resp) => {
      //console.log(resp.data);
      let newstd = [];
      resp.data.map((item) => {
        newstd.push({
          Name: { value: item._id, label: item.Name },
          Timings: item.Timings.split(",").map((item) => item.trim()),
        });
      });
      //   console.log(newstd);
      setTheaters(newstd);
    });
    axios.get(`${process.env.REACT_APP_API_URL}/Movies/`).then((resp) => {
      //console.log(resp);
      let newmovie = [];
      resp.data.map((item) =>
        newmovie.push({ value: item._id, label: item.Name })
      );
      setMoviesList(newmovie);
    });
  }, [setTheaters, setMoviesList]);

  const submit = async (event) => {
    event.preventDefault();

    try {
      await axios
        .post(`${process.env.REACT_APP_API_URL}/MapTheater/Create`, {
          Movies: state.Movies,
          Time: state.Time,
          Date: MovieDate.setHours(0, 0, 0, 0),
          Theater: state.Theater,
          AvlSeats: state.AvlSeats,
          AllocSeats: state.AllocSeats,
        })
        .then((resp) => {
          if (resp.data.message) {
            setErrorMessage(resp.data.message);
            setSuccessMessage("");
          } else {
            setSuccessMessage(resp.data);
            setErrorMessage("");
            setState({
              Name: "",
              Time: "",
              Theater: "",
              AvlSeats: 0,
              AllocSeats: 0,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  return (
    <TopBanner>
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            width: "25%",
            margin: "1% auto",
            display: "flex",
          },
        }}
        autoComplete="off"
        onSubmit={submit}
      >
        <TextField
          select
          label={"Movies"}
          name="Movies"
          value={state.Movies}
          variant={"outlined"}
          onChange={handleChange}
          helperText={"Choose the movie"}
        >
          {MoviesList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label={"Theaters"}
          name="Theater"
          value={state.Theater}
          variant={"outlined"}
          onChange={handleChange}
          helperText={"Choose the theater"}
        >
          {Theaters.map((option) => (
            <MenuItem key={option.Name.value} value={option.Name.value}>
              {option.Name.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label={"Show Time"}
          name="Time"
          value={state.Time}
          variant={"outlined"}
          onChange={handleChange}
          helperText={"Choose the show time"}
        >
          {Theaters.filter((item) => item.Name.value === state.Theater).map(
            (data) =>
              data.Timings.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))
          )}
        </TextField>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            name="Date"
            label="Date"
            value={MovieDate}
            onChange={(newValue) => {
              setMovieDate(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} variant={"outlined"} />
            )}
          />
        </LocalizationProvider>
        <TextField
          type={"number"}
          label={"Available Seats"}
          name="AvlSeats"
          value={state.AvlSeats}
          variant={"outlined"}
          onChange={handleChange}
        />
        <TextField
          type={"number"}
          label={"Allocated Seats"}
          name="AllocSeats"
          value={state.AllocSeats}
          variant={"outlined"}
          onChange={handleChange}
        />
        <Button variant={"contained"} color={"primary"} type={"submit"}>
          Map
        </Button>
        {errorMessage && <div className="error"> {errorMessage} </div>}
        {successMessage && <div className="success"> {successMessage} </div>}
      </Box>
    </TopBanner>
  );
};
export default MapTheater;
