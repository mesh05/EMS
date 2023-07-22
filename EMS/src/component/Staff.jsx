import { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import staff from "../staff.js";
import axios from "axios";
import Sidebar from "./Sidebar.jsx";
import { useRecoilValue, useRecoilState } from "recoil";
import { selectedIndexState, timetableState } from "../recoil_state.js";
import StaffTimetable from "./Timetable.jsx";

const Staff = () => {
  const selectedIndex = useRecoilValue(selectedIndexState);
  const [staffDetails, setStaffDetails] = useState({});
  const [timetable, setTimetable] = useRecoilState(timetableState);

  if (!staffDetails) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    // fetch("http://localhost:3000/staff/me", {
    //   method: "GET",
    //   headers: {
    //     Authorization: "Bearer " + localStorage.getItem("token"),
    //   },
    // }).then((result) => {
    //   result.json().then((content) => {
    //     setStaffDetails(content.user);
    //   });
    // });
    axios
      .get("http://localhost:3000/staff/me", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setStaffDetails(response.data.user);
      })
      .catch((error) => {
        setStaffDetails({});
      });

    axios
      .get("http://localhost:3000/staff/timetable", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setTimetable(response.data.timetable);
      })
      .catch((error) => {
        setTimetable([]);
      });
  }, []);
  if (JSON.stringify(staffDetails) === "{}") {
    return (
      <Box>
        <Typography sx={{ textAlign: "center" }} variant="h4">
          Staff Details
        </Typography>
        <Typography sx={{ textAlign: "center" }} variant="h5">
          Incorrect details
        </Typography>
      </Box>
    );
  } else if (selectedIndex == 0) {
    return (
      <Box sx={{ marginTop: "50px", display: "flex" }}>
        <Sidebar></Sidebar>
        <StaffDet staffDetails={staffDetails}></StaffDet>
      </Box>
    );
  } else if (selectedIndex == 1) {
    return (
      <Box sx={{ marginTop: "50px", display: "flex" }}>
        <Sidebar></Sidebar>
        <StaffTimetable></StaffTimetable>
      </Box>
    );
  } else if (selectedIndex == 2) {
    return (
      <Box sx={{ marginTop: "50px", display: "flex" }}>
        <Sidebar></Sidebar>
        <div>Your alloted room is ....</div>
      </Box>
    );
  }
};

const StaffDet = (props) => {
  return (
    <div>
      <Typography sx={{ textAlign: "center" }} variant="h3">
        Staff
      </Typography>
      <Typography sx={{ textAlign: "center" }} variant="h5">
        <ul type="none">
          <li>Staff id: {props.staffDetails.staff_id}</li>
          <li>Staff name: {props.staffDetails.staff_name}</li>
        </ul>
      </Typography>
    </div>
  );
};

export default Staff;
