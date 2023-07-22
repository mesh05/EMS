import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectedIndexState, timetableState } from "../recoil_state";

const Sidebar = () => {
  // const setSelectedIndex = useRecoilState(selectedIndexList);
  const [selectedIndex, setSelectedIndex] = useRecoilState(selectedIndexState);
  const [timetable, setTimetable] = useRecoilState(timetableState);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        height: "100%",
      }}
    >
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => {
            handleListItemClick(event, 0);
            // axios
            //   .get("http://localhost:3000/staff/me", {
            //     headers: {
            //       Authorization: "Bearer " + localStorage.getItem("token"),
            //     },
            //   })
            //   .then((result) => {
            //     console.log(result.data.user);
            //   });
          }}
        >
          <ListItemText primary="Details" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => {
            handleListItemClick(event, 1);
            // axios
            //   .get("http://localhost:3000/staff/timetable", {
            //     headers: {
            //       Authorization: "Bearer " + localStorage.getItem("token"),
            //     },
            //   })
            //   .then((result) => {
            //     setTimetable(result);
            //   });
          }}
        >
          <ListItemText primary="Time table" />
        </ListItemButton>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => {
            handleListItemClick(event, 2);
            
          }}
        >
          <ListItemText primary="Invigilation" />
        </ListItemButton>
        {/* <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemText primary="Spam" />
        </ListItemButton> */}
      </List>
    </Box>
  );
};

export default Sidebar;
