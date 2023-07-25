import { useEffect, useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);

  console.log("render");

  // only runs on first render or when count changes
  // does not run when count2 changes
  useEffect(() => {
    console.log("use effect");
  }, [count]);

  return (
    <div className="">
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>

      <br />

      {count}

      <br />

      <button onClick={() => setCount((prev) => prev - 1)}>-</button>

      <br />

      <button onClick={() => setCount(0)}>Set count to zero (0)</button>

      <br />

      <button onClick={() => setCount(5)}>Set count ot five (5)</button>
    </div>
  );
}
