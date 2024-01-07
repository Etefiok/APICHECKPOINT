import React, { useState, useEffect } from 'react';

function UserList() {
//   const [users, setUsers] = useState([]);
  const [ListOfUsers, setListOfUser] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setListOfUser(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h2>List of Users</h2>
      <ol>
        {ListOfUsers.map(ListOfUser => (
          <li key={ListOfUser.id}>{ListOfUser.name}</li>
        ))}
      </ol>
    </div>
  );
}

export default UserList;
