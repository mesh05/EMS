import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import signUp from "../signUp.js";

function SignUp() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <div>
      <Typography
        sx={{ textAlign: "center", marginTop: "80px", marginBottom: "20px" }}
        variant="h4"
      >
        Sign Up
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Card
          sx={{
            height: "400px",
            width: "300px",
            padding: "20px",
          }}
        >
          <TextField
            onChange={(e) => {
              setName(e.target.value);
            }}
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="name"
            variant="outlined"
          />
          <br></br>
          <br></br>
          <TextField
            onChange={(e) => {
              setId(e.target.value);
            }}
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="id"
            variant="outlined"
          />
          <br></br>
          <br></br>
          <TextField
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="password"
            variant="outlined"
          />
          <br></br>
          <br></br>

          <Button
            onClick={() => {
              signUp({ name, id, password });
              navigate("/signin");
            }}
            variant="contained"
          >
            Sign up
          </Button>
        </Card>
      </Box>
    </div>
  );
}

export default SignUp;
