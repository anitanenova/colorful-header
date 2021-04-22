import React, { useState } from "react";

const Playground = () => {

    const [count, setCount] = useState(0);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(currentCount => currentCount - 1)}>-</button>
      <button onClick={() => setCount(currentCount => currentCount + 1)}>+</button>
    </div>
  );
};

export default Playground;
