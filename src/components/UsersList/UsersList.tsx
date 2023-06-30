import * as React from "react";
import styles from "./UsersList.module.css";
import Card from "../Card/Card";

type UsersListProps = {
  userList: any;
};

const UsersList: React.FC<UsersListProps> = (props: UsersListProps) => {
  return (
    <>
      <Card className={styles.users}>
        <ul>
          {props.userList &&
            props.userList.map((user: any, index: number) => (
              <li key={index}>
                {user.username} {user.age}
              </li>
            ))}
        </ul>
      </Card>
    </>
  );
};

export default UsersList;
