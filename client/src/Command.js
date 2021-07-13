import React, { useState, useEffect } from 'react'

const Command = (props) => {
    const [command, setCommand] = useState({})
    const [error, setError] = useState("")

    useEffect(() => {
        fetch(`/commands/${props.match.params.id}`)
        .then(r => r.json())
        .then(data => {
            console.log("use effect", data)
            if (data.error){
                setError(data.error)
            } else {
                setCommand(data)
            }
        })
    }, [])

    if (error ==="") {
        return (
            <div>
                <h2>Command Details:</h2>
                <h3>Name: {command.name}</h3>
                <h3>Language: {command.language}</h3>
                <h3>Usage: {command.usage}</h3>
            </div>
        )
    } else {
        return (
            <h3>{error}</h3>
        )
    }
}

export default Command
