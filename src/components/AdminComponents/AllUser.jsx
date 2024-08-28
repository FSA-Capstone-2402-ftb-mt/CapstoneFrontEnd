import React from 'react';
import { useState, useEffect } from 'react';
const apiURL = 'http://localhost:3032/api/admin/all-users';


export default function AllUsers() {
  const [users, setUsers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);


  const areYouAdmin = async () => {
  
    try {
      const response = await fetch(`${apiURL}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer `,
        },
      });

      const data = await response.json();

      console.log('Admin Verified!');
    } catch (e) {
      console.error('You are not Admin!', e);
    }
  };

  areYouAdmin();


  useEffect(() => {
    if (isAdmin) {
      const fetchAllUsers = async () => {
        try {
          const response = await fetch(`${apiURL}`)

          const result = await response.json();
          console.log(result);
          setUsers(result);

        } catch (e) {
          console.error('Failed to fetch all users!');
          console.error(e);
        };
      }
      fetchAllUsers();
    }
  }, [isAdmin]);



  return (
    <>
      <h1>Users Tab</h1>

    </>
  )
}