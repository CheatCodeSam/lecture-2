import React from "react";

const Events = () => {
  //   const alertUser = () => {
  //     alert("Hello User");
  //   };

  let buttonText = "Click Me!";

  const changeButtonText = () => {
    buttonText = "This button has been updated!";
  };

  return (
    <button type="button" class="btn btn-primary" onClick={changeButtonText}>
      {buttonText}
    </button>
  );
};

export default Events;
