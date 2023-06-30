import * as React from "react";
import Button from "../Button/Button";
import styles from "./AddUser.module.css";
import Card from "../Card/Card";

type AddUserProps = {
  onAddUser: Function;
};

const AddUser: React.FC<AddUserProps> = (props: AddUserProps) => {
  const [userData, setUserData] = React.useState({
    username: "",
    age: 0,
  });

  const submitHandler = (event: any) => {
    props.onAddUser(userData);
    setUserData({
      username: "",
      age: 0,
    });
    event.preventDefault();
  };
  const inputChangeHandler = (source: string, value: string) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [source]: value.trim(),
      };
    });
  };
  return (
    <>
      <Card className={styles["input"]}>
        <form onSubmit={(event) => submitHandler(event)}>
          <label>UserName</label>
          <input
            value={userData["username"]}
            name="username"
            type="text"
            onChange={(event) =>
              inputChangeHandler("username", event.target.value)
            }
          />

          <label>Age(Years)</label>
          <input
            value={userData["age"]}
            name="age"
            type="number"
            onChange={(event) => inputChangeHandler("age", event.target.value)}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
