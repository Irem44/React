import React, { useState } from "react";

function useChange() {
  const [change, setChange] = useState(false);

  const openClose = () => {
    setChange(!change);
  };

  return {
    change,
    openClose,
  };
}

export default useChange;
