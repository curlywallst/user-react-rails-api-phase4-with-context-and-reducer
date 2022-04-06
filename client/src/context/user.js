// src/context/user.js
import React, { useState, useEffect, useReducer } from "react";
import reducer from './Reducer'

const UserContext = React.createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
          user: {
            commands: []
          }
        });

  useEffect(() => {
    fetch('/me')
    .then(r => {
      if (r.ok) {
        r.json()
        .then( u => {
          dispatch({
            type: "loginUser",
            payload: u
          })
        })
      }
    })
  }, [])

//   const value = {
//     todoList: state.todoList,
//     addTodoItem: (todoItemLabel) => {
//       dispatch({ type: actions.ADD_TODO_ITEM, todoItemLabel });
//     },
//     removeTodoItem: (todoItemId) => {
//       dispatch({ type: actions.REMOVE_TODO_ITEM, todoItemId });
//     },
//     markAsCompleted: (todoItemId) => {
//       dispatch({ type: actions.TOGGLE_COMPLETED, todoItemId });
//     }
//   };

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
          dispatch({
            type: "addCommand",
            payload: data
          })
          console.log(state)
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
        dispatch({
          type: "deleteCommand",
          payload: id
        })
        console.log(state)
      })
    }

    const logout = () => {
      dispatch({
        type: "logoutUser"
      })
    }

    const login = (u) => {
      dispatch({
        type: "loginUser",
        payload: u
      })
    }

    const signup = (u) => {
      console.log(u)

    }

console.log("state", state)
  return (
      <UserContext.Provider value={{state, login, logout, signup, addCommand, deleteCommand}}>
        {children}
      </UserContext.Provider>
  );
};

export { UserContext, Provider }