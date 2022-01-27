import TopBanner from "../UI/TopBanner";
import { Box, TextField, Button, MenuItem } from "@material-ui/core";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import axios from "axios";
import { useState } from "react";
const CreateMovie = () => {
  const [state, setState] = useState({
    Name: "",
    Description: "",
    Type: "",
    Rating: "",
    Languages: "",
    Synopsis: "",
    ReleaseDate: new Date(),
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    console.log(state);
    try {
      await axios
        .post(`${process.env.REACT_APP_API_URL}/Movies/Create`, {
          Name: state.Name,
          Description: state.Description,
          Type: state.Type,
          Rating: state.Rating,
          Languages: state.Languages,
          Synopsis: state.Synopsis,
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
              Description: "",
              Type: "",
              Rating: "",
              Languages: "",
              Synopsis: "",
              ReleaseDate: new Date(),
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
          type={"text"}
          label={"Name"}
          name="Name"
          value={state.Name}
          variant={"outlined"}
          onChange={handleChange}
        />
        <TextField
          type={"text"}
          label={"Description"}
          name="Description"
          value={state.Description}
          variant={"outlined"}
          onChange={handleChange}
        />
        <TextField
          select
          label={"Type"}
          name="Type"
          value={state.Type}
          variant={"outlined"}
          onChange={handleChange}
        >
          <MenuItem key="Released" value={"Released"}>
            {"Released Movies"}
          </MenuItem>
          <MenuItem key="Upcoming" value={"Upcoming"}>
            {"Upcoming Movies"}
          </MenuItem>
        </TextField>
        <TextField
          type={"number"}
          label={"Rating"}
          name="Rating"
          value={state.Rating}
          variant={"outlined"}
          onChange={handleChange}
        />
        <TextField
          type={"text"}
          label={"Languages"}
          name="Languages"
          value={state.Languages}
          variant={"outlined"}
          onChange={handleChange}
        />
        <TextField
          type={"text"}
          label={"Synopsis"}
          name="Synopsis"
          multiline={true}
          value={state.Synopsis}
          variant={"outlined"}
          onChange={handleChange}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            // disabled={state.Type !== "Upcoming"}
            name="ReleaseDate"
            value={state.ReleaseDate}
            label="Release Date"
            renderInput={(params) => (
              <TextField {...params} variant={"outlined"} />
            )}
            onChange={(value) => setState({ ...state, ReleaseDate: value })}
          />
        </LocalizationProvider>
        <Button variant={"contained"} color={"primary"} type={"submit"}>
          Submit
        </Button>
        {errorMessage && <div className="error"> {errorMessage} </div>}
        {successMessage && <div className="success"> {successMessage} </div>}
      </Box>
    </TopBanner>
  );
};
export default CreateMovie;
