import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <AppBar
        position="static"
        style={{ top: "0px", backgroundColor: "black" }}
      >
        <Container maxWidth="x1">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                EMS
              </Typography>
              <Button
                sx={{ color: "white" }}
                className="nav-btn"
                variant="text"
                href="/contactus"
              >
                Contact Us
              </Button>
              <Button
                sx={{ color: "white" }}
                className="nav-btn"
                variant="text"
                href="/aboutus"
              >
                About Us
              </Button>
            </Box>
            <Cred></Cred>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

const Cred = () => {
  const navigate = useNavigate();
  if (localStorage.getItem("token")) {
    return (
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button
          sx={{ margin: "5px" }}
          variant="text"
          component={Link}
          to="/staff/me"
        >
          Me
        </Button>
        <Button
          onClick={() => {
            localStorage.setItem("token", "");
            navigate("/");
          }}
          sx={{ margin: "5px" }}
          variant="text"
        >
          Logout
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
      <Button
        sx={{ margin: "5px" }}
        variant="text"
        component={Link}
        to="/signin"
      >
        Sign In
      </Button>
      <Button
        sx={{ margin: "5px" }}
        variant="outlined"
        component={Link}
        to="/signup"
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default Navbar;
