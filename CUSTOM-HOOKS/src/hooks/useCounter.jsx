import React, { useState } from "react";
import { useTransition } from "react";

function useCounter() {
  const [count, setCounter] = useState(0);

  const increase = () => {
    setCounter(count + 1);
  };

  const decrease = () => {
    setCounter(count - 1);
  };

  return {
    count,
    increase,
    decrease,
  };
}

export default useCounter;
