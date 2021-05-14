import { useState } from "react";
import Wrapper from "../Helper/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModule from "../UI/ErrorModuls";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [showErrorModule, setShowErrorModule] = useState(false);
  const addUserHandler = (event) => {
    event.preventDefault();

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setShowErrorModule(true);
      return;
    }

    if (+userAge < 1) {
      setShowErrorModule(true);
      return;
    }

    props.onAddUser({
      id: Math.random().toString(),
      name: userName,
      age: userAge,
    });

    resetUserForm();
  };

  const resetUserForm = () => {
    setUserAge("");
    setUserName("");
  };

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
  };
  const errorModuleHandler = (event) => {
    setShowErrorModule(event);
  };

  return (
    <Wrapper>
      {showErrorModule && (
        <ErrorModule
          onError={errorModuleHandler}
          title="An error occured !"
          msg="Something went wrong please check data again !"
        ></ErrorModule>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={userNameChangeHandler}
            value={userName}
          />

          <label htmlFor="userage">Age</label>
          <input
            type="number"
            id="userage"
            min="20"
            max="99"
            step="1"
            value={userAge}
            onChange={userAgeChangeHandler}
          />

          <Button type="submit">Add User</Button>
          <Button type="reset" onClick={resetUserForm}>
            Reset
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
