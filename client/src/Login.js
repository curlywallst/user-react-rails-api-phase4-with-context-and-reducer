import React, { useState, useContext }  from 'react'
import { UserContext } from "./context/user";
import { useHistory } from 'react-router-dom'

const Login = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const history = useHistory()
    const {login} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                password: password
            }) 
        })
        .then(r => r.json())
        .then(user => {
            if (!user.error) {
                login(user)
                history.push('/')
              } else {
                setName("")
                setPassword("")
                setError(user.error)
              }})
        }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input 
                    type="text"
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /> <br/>
                <label>Password: </label>
                <input 
                    type="password"
                    id="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /> <br/>
                <input type="submit"/>
            </form>
            <ul>
                <h3>{error}</h3>
            </ul>
        </>
    )
}

export default Login
