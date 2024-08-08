import React from 'react';
import { useState, useEffect} from 'react';
const apiURL = 'http://localhost:3032/api/users/';


export default function AllUsers() { 
  const [users, setUsers] = useState([]);

  useEffect (()=> {
    const fetchAllUsers = async () => {
      try {
        const response = await fetch(`${apiURL}`)

        const result = response.json();
        console.log(result);
        setUsers(result);
      } catch (e) {
        console.error('Failed to fetch all users!');
        console.error(e);
      };
    }
    fetchAllUsers();
  }, [])

  return (
    <>
      <h1>Users Tab</h1>
      
    </>
  )
}