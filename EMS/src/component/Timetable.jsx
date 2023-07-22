import * as React from "react";
import { useRecoilValue } from "recoil";
import { timetableState } from "../recoil_state";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(day, p1, p2, p3, p4, p5, p6, p7) {
  return { day, p1, p2, p3, p4, p5, p6, p7 };
}

function StaffTimetable() {
  const timetable = useRecoilValue(timetableState);
  const rows = [];
  timetable.map((row) => {
    rows.push(
      createData(
        row.day_name,
        row.p1,
        row.p2,
        row.p3,
        row.p4,
        row.p5,
        row.p6,
        row.p7
      )
    );
  });
  return (
    <TableContainer sx={{ margin: "30px" }} component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Day</StyledTableCell>
            <StyledTableCell align="center">p1</StyledTableCell>
            <StyledTableCell align="center">p2</StyledTableCell>
            <StyledTableCell align="center">p3</StyledTableCell>
            <StyledTableCell align="center">p4</StyledTableCell>
            <StyledTableCell align="center">p5</StyledTableCell>
            <StyledTableCell align="center">p6</StyledTableCell>
            <StyledTableCell align="center">p7</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.day}>
              <StyledTableCell component="th" scope="row">
                {row.day}
              </StyledTableCell>
              <StyledTableCell align="center">{row.p1}</StyledTableCell>
              <StyledTableCell align="center">{row.p2}</StyledTableCell>
              <StyledTableCell align="center">{row.p3}</StyledTableCell>
              <StyledTableCell align="center">{row.p4}</StyledTableCell>
              <StyledTableCell align="center">{row.p5}</StyledTableCell>
              <StyledTableCell align="center">{row.p6}</StyledTableCell>
              <StyledTableCell align="center">{row.p7}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default StaffTimetable;
