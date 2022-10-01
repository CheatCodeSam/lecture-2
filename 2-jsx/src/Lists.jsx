import React from "react";

const Lists = () => {
  const staff = [
    { id: 1, user: "Carson", position: "president" },
    { id: 2, user: "Housam", position: "vice president" },
    { id: 3, user: "Dejon", position: "treasurer" },
  ];

  return (
    <ul>
      {staff.map((staffMember) => (
        <li key={staffMember.id}>
          {staffMember.user}: {staffMember.position}
        </li>
      ))}
    </ul>
  );
};

export default Lists;
