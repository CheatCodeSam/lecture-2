import React from "react";

const Conditional = () => {
  const isLoggedIn = false;
  const user = { name: "Carson" };

  return (
    <div>
      <div>Authentication</div>
      <div>{isLoggedIn ? "Hello, " + user.name : "You are not signed in"}</div>
    </div>
  );
};

export default Conditional;
