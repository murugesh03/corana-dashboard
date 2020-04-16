import React, { createContext, useState } from "react";

const CoranaContext = createContext();
const CoranaProvider = (props) => {
  const [corana, setCorana] = useState();
  return (
    <CoranaContext.Provider value={{ ...corana }}>
      {props.children}
    </CoranaContext.Provider>
  );
};
const CoranaConsumer = CoranaContext.Consumer;
export { CoranaProvider, CoranaConsumer };
