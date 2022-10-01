import React from "react";

const BannableUser = (props) => {
  return (
    <div>
      <div>Username: {props.name}</div>
      <div>Status: {props.status}</div>
      {props.isBan && <div style={{ color: "red" }}> THIS USER IS BANNED</div>}
      {!props.isBan && (
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => props.banUser(props.id)}
        >
          Ban this User
        </button>
      )}
    </div>
  );
};

export default BannableUser;
