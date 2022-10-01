import React from "react";
import dayjs from "dayjs";

const convertDate = (epoch) => {
  const date = dayjs.unix(epoch);
  return date.format("MM/DD/YYYY");
};

const Rendering = () => {
  const user = {
    username: "CheatCodeSam",
    epochTimeOfBirth: 913190461,
    profilePicture:
      "https://en.gravatar.com/userimage/216867593/f906005dca3470638431c85adffe5913.jpeg",
  };

  return (
    <div class="card" style={{ width: "18rem" }}>
      <div class="card-body">
        <img src={user.profilePicture} />
        <h2>{user.username}</h2>
        <div>{convertDate(user.epochTimeOfBirth)}</div>
      </div>
    </div>
  );
};

export default Rendering;
