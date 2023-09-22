import { createContext, useState } from "react";

export const StateContext = createContext();
function State({children}) {
  const [cart, setCart] = useState([]);
  const [currentUserId, setCurrentUserId]=useState("")
  const [currentUser, setCurrentUser]=useState({})

  return (
    <StateContext.Provider value={{cart, setCart, currentUserId, setCurrentUserId, currentUser, setCurrentUser}}>
      {children}
    </StateContext.Provider>
  );
}
export default State;
