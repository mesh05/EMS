import { Typography } from "@mui/material";

function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <Typography
          sx={{ textAlign: "center", marginTop: "80px" }}
          variant="h3"
        >
          EXAM MANAGEMENT SYSTEM
        </Typography>
        <div style={{ width: "1000px" }}>
          <p style={{ fontSize: "25px" }}>
            An exam management is a software developed to manage the exam
            process. It covers the activities that are related to examination
            management like allotting invigilators to the specified room numbers
            according to their age and time table.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
