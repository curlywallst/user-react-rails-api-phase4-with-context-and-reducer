// src/context/user.js
import React, { useState, useEffect } from "react";

// Create context
const UserContext = React.createContext(); 

// create a provider component
function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('/me')
        .then(r => {
          if (r.ok) {
            r.json()
            .then( u => {
              setUser(u)
            })
          }
        })
      }, [])

    return (
      <UserContext.Provider value={{user, setUser}}>
        {children}
      </UserContext.Provider>
    );
}
  
  export { UserContext, UserProvider }; 