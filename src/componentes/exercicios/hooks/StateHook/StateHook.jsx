import { useState } from "react";

// function initalCount() {
//   console.log("Função inicial chamada");
//   return 0;
// }

function StateHook() {
  //   const [count, setCount] = useState(() => initalCount());
  const [count, setCount] = useState(0);

  function decreaseCount() {
    // setState((prev) => {
    //   return { ...prev, count: prev.count - 1 };
    // });
    setCount((prev) => prev - 1);
  }

  function increaseCount() {
    // setState((prev) => {
    //   return { ...prev, count: prev.count + 1 };
    // });
    setCount((prev) => prev + 1);
  }

  return (
    // <div style={{ backgroundColor: theme }}>
    <div>
      <button onClick={decreaseCount}>-</button>
      <span>{count}</span>
      <button onClick={increaseCount}>+</button>
    </div>
  );
}

export default StateHook;
