import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const addToCount = () => {
    setCount(count + 1);
  };

  console.log("I am being called since Counter is being rerendered");

  return (
    <div>
      <button type="button" class="btn btn-primary" onClick={addToCount}>
        {count}
      </button>
    </div>
  );
};

export default Counter;
