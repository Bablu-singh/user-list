import "./App.css";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";
import React, {useState} from 'react'

const data = [
  {id: 'a', name: "bablu singh", age: "24" },
  {id: 'b', name: "bablu singh", age: "24" },
  {id: 'c', name: "bablu singh", age: "24" },
  {id: 'd', name: "bablu singh", age: "24" },
  {id: 'e', name: "bablu singh", age: "24" },
  {id: 'f', name: "bablu singh", age: "24" },
];

function App() {
  const [userData,setUserData]=useState(data);
  const onAddUser = (event)=>{
    setUserData((previousState) => {
      return [...previousState, event];
    })
  }
  return (
    <React.Fragment>
      <AddUser onAddUser={onAddUser}/>
      <UserList users={userData} />
    </React.Fragment>
  );
}

export default App;
