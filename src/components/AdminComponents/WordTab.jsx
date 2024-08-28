import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const API_URL = 'http://localhost:3032/api/words/all';

//Create a table to show a few of the words with it ID, Word, Day of the week and Day Name
function createData(id, word) {
  return { id, word };
}

export default function adWordTable() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    const fetchAllWords = async () => {
      try {
        const response = await fetch(`${API_URL}`)

        const result = await response.json();
        console.log(result);

        const minWords = result.slice(0, 5).map((words) => createData(words.id, words.word));
        setWords(minWords);
      } catch (e) {
        console.error('Failed to fetch all words!');
        console.error(e);
      }
    };
    fetchAllWords();
  }, [])

  const navigate = useNavigate();

  const handleWordClick = () => {
    navigate('/admin/admin_dashboard/AllWords')
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Words Table</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Word</TableCell>
            <TableCell align="right">Day of Week</TableCell>
            <TableCell align="right">Day Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {words.map((words) => (
            <TableRow
              key={words.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {words.word}
              </TableCell>
              <TableCell align="right">{words.id}</TableCell>
              <TableCell align="right">{words.word}</TableCell>
              <TableCell align="right">{words.day_of_week}</TableCell>
              <TableCell align="right">{words.day_name}</TableCell>
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
