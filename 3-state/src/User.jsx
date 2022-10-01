import React from "react";

const User = (props) => {
  return (
    <div>
      <div>Username: {props.name}</div>
      <div>Status: {props.status}</div>
    </div>
  );
};

export default User;
