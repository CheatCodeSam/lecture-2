import React, { useState } from "react";
import BannableUser from "./BannableUser";

const FunctionProperties = () => {
  const [users, setUsers] = useState([
    { id: 0, name: "Carson", status: "online", banned: false },
    { id: 1, name: "Housam", status: "offline", banned: false },
    { id: 2, name: "Dejon", status: "online", banned: false },
    { id: 3, name: "Ivan", status: "online", banned: false },
  ]);

  const banUser = (id) => {
    const userCopy = [...users];
    userCopy[id].banned = true;
    setUsers(userCopy);
  };

  return (
    <div>
      {users.map((user) => {
        return (
          <BannableUser
            key={user.id}
            id={user.id}
            name={user.name}
            status={user.status}
            banUser={banUser}
            isBan={user.banned}
          />
        );
      })}
    </div>
  );
};

export default FunctionProperties;
