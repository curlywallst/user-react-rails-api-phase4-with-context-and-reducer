import React, { useState, useEffect } from 'react'
import { Route, useRouteMatch } from "react-router-dom";
import CommandForm from './CommandForm'
import CommandLinks from './CommandLinks'
import Command from './Command'
import useCommands from './hooks/useCommands'

const Commands = () => {
    // const [commands, setCommands] = useState([])
    const [error, setError] = useState("")
    const [formFlag, setFormFlag] = useState(false)

    const match = useRouteMatch();
    console.log("commands", match);

    // useEffect(() => {
    //     fetch('/commands')
    //     .then(r => r.json())
    //     .then(data => {
    //         console.log("use effect", data)
    //         if (data.error){
    //             setError(data.error)
    //         } else {
    //             setCommands(data)
    //         }
    //     })
    // }, [])
    const {commands} = useCommands()
    console.log("use effect", commands)

    // if (data.error){
    //     setError(data.error)
    // } else {
    //     setCommands(data)
    // }

    const addCommand = (command) =>{
        // fetch('/commands', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(command)
        // })
        // .then(r => r.json())
        // .then(data => {
        //     console.log(data)
        //     setCommands([...commands, data])
        //     setFormFlag(false)
        // })
    }

    if (error === ""){
        if (match.isExact) {
            return (
                <div>
                    <ul>
                        <CommandLinks commands={commands} />
                        <br/>
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
                <div>
                    <Route path={`${match.url}/:id`}>
                        <Command commands={commands} />
                    </Route>
                </div>
            )
        }
    } else {
        return (
            <h3>Not authorized - Please Sign up or Login</h3>
        )
    }
}

export default Commands