import React, { createContext, useContext } from "react";
const block = createContext();
const App = () => {
    const msg = "Madhu";
    return (
        <block.Provider value={msg}>
            <Component />
        </block.Provider>
    );
};
const Component = () => {
    return <Child />;
};
const Child = () => { 
  return <Grand />; 
};
const Grand = () => {
    const msg1 = useContext(block);
    return <p>Hello, {msg1}!</p>;
};
export default App;