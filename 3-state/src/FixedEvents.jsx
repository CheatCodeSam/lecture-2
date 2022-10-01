import React from "react";
import { useState } from "react";

const FixedEvents = () => {
  const [buttonText, setButtonText] = useState("ClickMe");

  const changeButtonText = () => {
    setButtonText("This button has been updated!");
  };

  return (
    <button type="button" class="btn btn-primary" onClick={changeButtonText}>
      {buttonText}
    </button>
  );
};

export default FixedEvents;
