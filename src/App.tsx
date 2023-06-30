import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UsersList from "./components/UsersList/UsersList";
import ErrorModal from "./components/ErrorModal/ErrorModal";

const VALIDATION_LIST = {
  emptyInput: "Please enter a valid name and age (non-empty values)",
  ageGreaterThanZero: "Please enter a valid age(>0)"
}
function App() {
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState({
    title: "Invalid input",
    message: ""
  })
  const setOutput = (user: any) => {
    if((user.username === "" && +user.age === 0) || user.username === "" || +user.age === 0 || user.age === "") {
      setError((prevState) => {
        return {
          ...prevState,
          message: VALIDATION_LIST['emptyInput']
        }
      })
    } else if(+user.age < 1) {
      setError((prevState) => {
        return {
          ...prevState,
          message: VALIDATION_LIST['ageGreaterThanZero']
        }
      })
    } else {
      setUserList((prevState: any) => {
        return [
          user,
          ...prevState
        ]
      });
    }
  }
  const closeModal = () => {
    setError((prevError)=> {
      return {...prevError, message: ""}
    })
  }
  return (
    <>
      {error.message && <ErrorModal errorText={error} onClose={closeModal}/>}
      <AddUser onAddUser={setOutput}/>
      { userList.length > 0 && <UsersList userList={userList} />}
    </>
  );
}

export default App;
