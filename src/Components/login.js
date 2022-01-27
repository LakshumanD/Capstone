import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TopBanner from "./UI/TopBanner";

const Login = (props) => {
  const [state, setState] = useState({ Username: "", Password: "" });
  const history = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  const [errorMessage, setErrorMessage] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(`${process.env.REACT_APP_API_URL}/User/Login`, {
          Username: state.Username,
          Password: state.Password,
        })
        .then((resp) => {
          if (!resp.data.Token) {
            setErrorMessage(resp.data);
          } else {
            // console.log(resp.data);
            sessionStorage.setItem("Token", resp.data.Token);
            sessionStorage.setItem("Type", resp.data.Type);

            if (props.setToken) props.setToken(resp.data.Token);
            else history("/");

            setErrorMessage("");
            setState({
              Username: "",
              Password: "",
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

  const theme = createTheme();

  return (
    <TopBanner>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" className="inner_login">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={submit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="Username"
                label="User Name"
                name="Username"
                // autoComplete="email"
                // autoFocus
                value={state.Username}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="Password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
                value={state.Password}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  {/* <Link href="/reserpwd" variant="body2">
                    Forgot password?
                  </Link> */}
                </Grid>
                <Grid item>
                  <Link href="/Register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          {errorMessage && <div className="error"> {errorMessage} </div>}
        </Container>
      </ThemeProvider>
    </TopBanner>
  );
};
export default Login;
