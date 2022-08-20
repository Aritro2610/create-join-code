import Users from './Users';
import Button from './Button';
import { useState,useEffect } from 'react';
import CreateTeam from './CreateTeam';
import JoinTeam from './JoinTeam';

function App() {
  // const API_URL = 'https://jsonplaceholder.typicode.com/';
  // const [users,setUser]=useState([]);
  // const [currentPage,setCurrentpage]=useState('users');

  // useEffect(()=>{
  //   const fetchUsers = async()=>{
  //     try {
  //       const response  = await fetch(`${API_URL}${currentPage}`);
  //       if(!response.ok) throw Error('Did not receive the data');
  //       const listItems = await response.json(); 
  //       setUser(listItems);
  //     } catch (error) {
  //       console.log(error.message)
  //     }
  //   }
  //   fetchUsers();
  // },[currentPage])

  // const handleUser = ()=>{
  //   console.log('Handle user');
  // }
  return (
    <div className="App">
      <CreateTeam/>
      <br />
      <br />
      <br />
      <JoinTeam/>
      {/* <Button currentPage={currentPage} setCurrentpage={setCurrentpage}/>
      <Users users={users}/> */}
    </div>
  );
}

export default App;
