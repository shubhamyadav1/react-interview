import MemoizedComponent from "./MemoizedComponent";
import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increament
      </button>
      <MemoizedComponent />
    </div>
  );
};
export default Counter;
