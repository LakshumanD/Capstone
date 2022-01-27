import { Box, TextField, Button } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";
import TopBanner from "./UI/TopBanner";
const Register = () => {
  const [state, setState] = useState({
    Username: "",
    Password: "",
    Mobile: "",
    Email: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    // console.log(state);
    try {
      await axios
        .post(`${process.env.REACT_APP_API_URL}/User/Create`, {
          Username: state.Username,
          Password: state.Password,
          Mobile: state.Mobile,
          Email: state.Email,
        })
        .then((resp) => {
          if (resp.data.message) {
            setErrorMessage(resp.data.message);
            setSuccessMessage("");
          } else {
            setSuccessMessage(resp.data);
            setErrorMessage("");
            setState({
              Username: "",
              Password: "",
              Mobile: "",
              Email: "",
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
          label={"User Name"}
          name="Username"
          value={state.Username}
          variant={"outlined"}
          onChange={handleChange}
        />
        <TextField
          type={"text"}
          label={"Password"}
          name="Password"
          value={state.Password}
          variant={"outlined"}
          onChange={handleChange}
        />
        <TextField
          type={"text"}
          label={"Mobile Number"}
          name="Mobile"
          value={state.Mobile}
          variant={"outlined"}
          onChange={handleChange}
        />
        <TextField
          type={"text"}
          label={"Email"}
          name="Email"
          value={state.Email}
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

export default Register;
