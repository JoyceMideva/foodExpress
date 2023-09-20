import { createContext, useState } from "react";

export const StateContext = createContext();
function State({children}) {
  const [cart, setCart] = useState([]);
  return (
    <StateContext.Provider value={{cart, setCart}}>
      {children}
    </StateContext.Provider>
  );
}
export default State;
