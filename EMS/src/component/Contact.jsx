import { Typography } from "@mui/material";

function Contact() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <Typography
          sx={{ textAlign: "center", marginTop: "80px" }}
          variant="h3"
        >
          Contact Us
        </Typography>
        <div style={{ width: "1000px" }}>
          <p style={{ fontSize: "25px" }}>Contact box here</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
