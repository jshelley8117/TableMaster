import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

export default function BasicTable({ tables, onAppetizer, onMainCourse, onAwaitingPayment, onAwaitingClean }) {
  const filteredTables = tables.filter(
    (table) => table.state === "Occupied" || table.state === "Appetizer" || table.state === "Main Course" || table.state === "Awaiting Payment"
  );

    const handleAppetizer = (tableId) => {
        onAppetizer(tableId)
    }

    const handleMainCourse = (tableId) => {
        onMainCourse(tableId)
    }

    const handleAwaitingPayment = (tableId) => {
        onAwaitingPayment(tableId)
    }

    const handleAwaitingClean = (tableId) => {  
        onAwaitingClean(tableId)
    }

  return (
    <div
      className="table-container"
      style={{ overflowY: "scroll", maxHeight: "600px" }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Table Number</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Seat Count</TableCell>
              <TableCell align="left">Current Server</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTables.map((table) => (
              <TableRow
                key={table.label}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {table.label}
                </TableCell>
                <TableCell align="left">{table.state}</TableCell>
                <TableCell align="left">{table.seatCount}</TableCell>
                <TableCell align="left">{table.server}</TableCell>
                <TableCell align="left">
                  <Button variant="outlined" onClick={() => {handleAppetizer(table._id)}}>Appetizer</Button>
                </TableCell>
                <TableCell align="left">
                  <Button variant="outlined" onClick={() => {handleMainCourse(table._id)}}>Main Course</Button>
                </TableCell>
                <TableCell align="left">
                    <Button variant="outlined" onClick={() => {handleAwaitingPayment(table._id)}}>Payment</Button>
                </TableCell>
                <TableCell align="left">
                    <Button variant="outlined" onClick={() => {handleAwaitingClean(table._id)}}>Ready to clean</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
