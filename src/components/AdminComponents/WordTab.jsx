import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

//Create a table to show a few of the words with it ID, Word, Day of the week and Day Name
function createData(id, word, day_of_week, day_name) {
  return { id, word, day_of_week, day_name };
}

const rows = [
  createData(1, 'cameo', 1, 'Sunday'),
  createData(2, 'adapt', 2, 'Monday'),
  createData(3, 'drake', 3, 'Tuesday'),
  createData(4, 'exile', 4, 'Wednesday'),
]

export default function WordTable() {
  const navigate = useNavigate();

  const handleWordClick = () => {
    navigate('/admin_dashboard/AllWords')
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Words</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Word</TableCell>
            <TableCell align="right">Day of Week</TableCell>
            <TableCell align="right">Day Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.word}</TableCell>
              <TableCell align="right">{row.day_of_week}</TableCell>
              <TableCell align="right">{row.day_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        onClick={handleWordClick}
        style={{
          backgroundColor: 'lightblue',
          borderRadius: '25px',

        }}>See All Words</Button>
    </TableContainer>
  );
};
