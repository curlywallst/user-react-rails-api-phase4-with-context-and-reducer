import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

const Command = (props) => {
    const [commands, setCommands] = useState([])
    const [error, setError] = useState("")
    const params = useParams();

    useEffect(() => {
        if (!props) {
            console.log("useEffect for Command")
            fetch('/commands')
            .then(r => r.json())
            .then(data => {
                console.log("use effect2", data)
                if (data.error){
                    setError(data.error)
                } else {
                    setCommands(data)
                    console.log("commands set to", commands)
                }
            })
        } else { setCommands(props.commands) }
    }, [])

    if (error === "") {
        const command = commands.find(c => `${c.id}` === params.id)
        if (command){
            return (
                <div>
                    <h2>Command Details:</h2>
                    <h3>Name: {command.name}</h3>
                    <h3>Language: {command.language}</h3>
                    <h3>Usage: {command.usage}</h3>
                </div>
            )
        } else {
            return <h3>Not Authorized</h3>
        }
    } else {
        return (
            <h3>{error}</h3>
        )
    }
}

export default Command
