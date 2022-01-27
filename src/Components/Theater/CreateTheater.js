import TopBanner from "../UI/TopBanner";
import { Box, TextField, Button } from "@material-ui/core";

import axios from "axios";
import { useState } from "react";
const CreateTheater = () => {
  const [state, setState] = useState({
    Name: "",
    Timings: "",
    Price: 0,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const submit = async (event) => {
    event.preventDefault();

    try {
      await axios
        .post(`${process.env.REACT_APP_API_URL}/Theater/Create`, {
          Name: state.Name,
          Timings: state.Timings,
          Price: state.Price,
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
              Timings: "",
              Price: 0,
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
          label={"Timings"}
          name="Timings"
          value={state.Timings}
          variant={"outlined"}
          onChange={handleChange}
        />
        <TextField
          type={"number"}
          label={"Seat Price"}
          name="Price"
          value={state.Price}
          variant={"outlined"}
          onChange={handleChange}
        />
        <Button variant={"contained"} color={"primary"} type={"submit"}>
          Submit
        </Button>
        {errorMessage && <div className="error"> {errorMessage} </div>}
        {successMessage && <div className="success"> {successMessage} </div>}
      </Box>
    </TopBanner>
  );
};
export default CreateTheater;
