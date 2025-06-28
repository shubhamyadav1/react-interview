import { useRef, useState, useEffect } from "react";

const UseRefHook = () => {
  const ref = useRef(0);
  const [count, setCount] = useState(0);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.value = 5;
  }, []);

  //   console.log("re-render");
  //   console.log(inputRef);

  return (
    <div>
      {ref.current}
      <button onClick={() => (ref.current += 1)}>Increment Ref</button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment State
      </button>
      {count}

      <input ref={inputRef} />
      {/* <button
        onClick={() => {
          inputRef.current.focus();
          inputRef.current.value = 5;
        }}
      >
        Set Focus
      </button> */}
    </div>
  );
};

export default UseRefHook;
