// src/context/user.js
import React, { useState, useEffect } from "react";

// Create context
const UserContext = React.createContext(); 

// create a provider component
function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [commands, setCommands] = useState([])

    useEffect(() => {
        fetch('/me')
        .then(r => {
          if (r.ok) {
            r.json()
            .then( u => {
              setUser(u)
              fetchCommands()
            })
          }
        })
      }, [])

    const fetchCommands = () => {
      fetch('/commands')
      .then(r => r.json())
      .then(data => {
          console.log(data)
          setCommands(data)
      })
    }

    const addCommand = (command) =>{
      fetch('/commands', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(command)
      })
      .then(r => r.json())
      .then(data => {
          setCommands([...commands, data])
      })
    }

    const deleteCommand = (id) => {
      fetch(`/commands/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(() => {
      const newCommands = commands.filter( c => c.id != id)
      setCommands(newCommands)
    }
      )
    }

    const logout = () => {
      setUser(null)
    }

    const login = (u) => {
      setUser(u)
      fetchCommands()
    }

    return (
      <UserContext.Provider value={{user, login, logout, commands, addCommand, deleteCommand}}>
        {children}
      </UserContext.Provider>
    );
}
  
  export { UserContext, UserProvider }; 