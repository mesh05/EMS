import { Typography } from "@mui/material";

function About() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <Typography
          sx={{ textAlign: "center", marginTop: "80px" }}
          variant="h3"
        >
          About Us
        </Typography>
        <div style={{ width: "1000px" }}>
          <p style={{ fontSize: "25px" }}>about us content here</p>
        </div>
      </div>
    </div>
  );
}

export default About;
