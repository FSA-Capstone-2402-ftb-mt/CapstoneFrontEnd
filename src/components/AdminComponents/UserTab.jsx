import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function createData(id, username, join_date, overall_score, overall_games) {
  return { id, username, join_date, overall_score, overall_games };
}

const rows = [
  createData(1, 'AlbertoM', 0, 0, 0),
  createData(2, 'TylerS', 0, 0, 0),
  createData(3, 'EdwinV', 0, 0, 0),
  createData(4, 'SlavikT', 0, 0, 0),
];

export default function UserTable() {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate('/admin_dashboard/AllUsers')
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Users Table</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Join Date</TableCell>
            <TableCell align="right">Overall Score</TableCell>
            <TableCell align="right">Overall Games</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.join_date}</TableCell>
              <TableCell align="right">{row.overall_score}</TableCell>
              <TableCell align="right">{row.overall_games}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        onClick={handleUserClick}
        style={{
          backgroundColor: 'lightblue',
          borderRadius: '25px',

        }}>See All Users</Button>
    </TableContainer>

  );
};