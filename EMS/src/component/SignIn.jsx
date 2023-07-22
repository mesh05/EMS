import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";

import login from "../login.js";

function SignIn() {
  const navigate = useNavigate();
  const [id, setId] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <div>
      <Typography
        sx={{ textAlign: "center", marginTop: "80px", marginBottom: "20px" }}
        variant="h4"
      >
        Sign In
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Card
          sx={{
            height: "300px",
            width: "300px",
            padding: "20px",
          }}
        >
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
              login({ id: id, password: password });
              window.location = "staff/me";
              // navigate("/staff/me");
            }}
            variant="contained"
          >
            Sign in
          </Button>
        </Card>
      </Box>
    </div>
  );
}

export default SignIn;
