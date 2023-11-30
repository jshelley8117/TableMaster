import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";

export default function BasicTable({ tables, onRemoveParty, onOccupied }) {
  const filteredTables = tables.filter((table) => table.state === "Open" || table.state === "Occupied");
  const [occupyDialogState, setOccupyDialogState] = useState(false);
  const [seatCount, setSeatCount] = useState(1);
  const [server, setServer] = useState("");
  const [selectedTableId, setSelectedTableId] = useState(null);

  const handleOccupyDialogOpen = (tableId) => {
    setSelectedTableId(tableId);
    setOccupyDialogState(true);
  };

  const handleOccupyDialogClose = () => {
    setOccupyDialogState(false);
  };

  // need to pass vales from dialog to handleOccupied
  const handleOccupied = (tableId, insertSeatCount, insertServer) => {
    onOccupied(tableId, insertSeatCount, insertServer);
  };

  const handleRemoveParty = (tableId) => {
    onRemoveParty(tableId);
  };

  const handleSeatCountChange = (event) => {
    setSeatCount(event.target.value);
  };

  const handleServerChange = (event) => {
    setServer(event.target.value);
  };

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
                key={table._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {table.label}
                </TableCell>
                <TableCell align="left">{table.state}</TableCell>
                <TableCell align="left">{table.seatCount}</TableCell>
                <TableCell align="left">{table.server}</TableCell>
                <TableCell align="left">
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => {
                      handleRemoveParty(table._id);
                    }}
                  >
                    Remove Party
                  </Button>
                </TableCell>

                <TableCell align="left">
                  <Button
                    variant="outlined"
                    color="success"
                    onClick={() => {
                      handleOccupyDialogOpen(table._id);
                    }}
                  >
                    Occupy
                  </Button>

                  {/* INSERT DIALOG HERE */}
                  <Dialog
                    open={occupyDialogState}
                    onClose={handleOccupyDialogClose}
                  >
                    <DialogTitle>Reserve Table</DialogTitle>
                    <DialogContent>
                      <br />
                      {/* START SEAT COUNT SELECT */}
                      <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                          <InputLabel id="seat-count-select-label">
                            Seat Count
                          </InputLabel>
                          <Select
                            labelId="seat-count-select-label"
                            id="seat-count-select"
                            value={seatCount}
                            label="Seat Count"
                            onChange={handleSeatCountChange}
                          >
                            <MenuItem value={1}>One</MenuItem>
                            <br />
                            <MenuItem value={2}>Two</MenuItem>
                            <br />
                            <MenuItem value={3}>Three</MenuItem>
                            <br />
                            <MenuItem value={4}>Four</MenuItem>
                            <br />
                            <MenuItem value={5}>Five</MenuItem>
                            <br />
                            <MenuItem value={6}>Six</MenuItem>
                            <br />
                            <MenuItem value={7}>Seven</MenuItem>
                            <br />
                            <MenuItem value={8}>Eight</MenuItem>
                            <br />
                            <MenuItem value={9}>Nine</MenuItem>
                            <br />
                            <MenuItem value={10}>Ten</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                      {/* END SEAT COUNT SELECT */}

                      <br />
                      {/* START SERVER TEXTFIELD */}
                      <TextField
                        id="server-textfield"
                        name="server"
                        label="Enter Server"
                        variant="standard"
                        input="text"
                        onChange={handleServerChange}
                      />
                      {/* END SERVER TEXTFIELD */}

                      <br />
                    </DialogContent>
                    <DialogActions>
                      <Button
                        variant="outlined"
                        onClick={() => {
                          handleOccupyDialogClose();
                          handleOccupied(selectedTableId, seatCount, server);
                        }}
                      >
                        Occupy Table
                      </Button>
                    </DialogActions>
                  </Dialog>
                  {/* END DIALOG HERE */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}