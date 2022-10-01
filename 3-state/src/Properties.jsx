import React from "react";
import { useState } from "react";
import User from "./User";

const Properties = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Carson", status: "online" },
    { id: 2, name: "Housam", status: "offline" },
    { id: 3, name: "Dejon", status: "online" },
    { id: 4, name: "Ivan", status: "online" },
  ]);

  const shutdownServer = () => {
    setUsers(
      users.map((user) => {
        return { ...user, status: "offline" };
      })
    );
  };

  return (
    <div>
      <div>
        {users.map((user) => {
          return <User key={user.id} name={user.name} status={user.status} />;
        })}
      </div>
      <button type="button" class="btn btn-primary" onClick={shutdownServer}>
        Shutdown Server
      </button>
    </div>
  );
};

export default Properties;
