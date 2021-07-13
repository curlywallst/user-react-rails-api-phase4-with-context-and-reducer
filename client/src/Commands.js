import React, { useState, useEffect } from 'react'
import CommandForm from './CommandForm'
import CommandLink from './CommandLink'

const Commands = () => {
    const [commands, setCommands] = useState([])
    const [error, setError] = useState("")
    const [formFlag, setFormFlag] = useState(false)

    useEffect(() => {
        fetch('/commands')
        .then(r => r.json())
        .then(data => {
            console.log("use effect", data)
            if (data.error){
                setError(data.error)
            } else {
                setCommands(data)
            }
        })
    }, [])

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
            console.log(data)
            setCommands([...commands, data])
            setFormFlag(false)
        })
    }

    const commandsList = commands.map(c => <div><CommandLink key={c.id} command={c} /><br/><br/></div>)

    if (error === ''){
        return (
            <div>
                <ul>
                    {commandsList}
                    {formFlag ? 
                        <CommandForm addACommand={addCommand} /> 
                        :
                        <button onClick={() => setFormFlag(true)}>Add Command</button>
                    }
                </ul>
            </div>
        )
    } else {
        return (
            <h3>Not authorized - Please Sign up or Login</h3>
        )
    }
}

export default Commands