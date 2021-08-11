import React, { useState, useContext } from 'react'
import { Route, useRouteMatch } from "react-router-dom";
import CommandForm from './CommandForm'
import CommandLinks from './CommandLinks'
import Command from './Command'
// import useCommands from './hooks/useCommands'
import { UserContext } from "./context/user";

const Commands = () => {
    const {user, commands, addCommand} = useContext(UserContext);
    const [formFlag, setFormFlag] = useState(false)
    const match = useRouteMatch();

    const addACommand = (command) => {
        addCommand(command)
        setFormFlag(false)
    }

    if (user){
        if (match.isExact) {
            return (
                <div>
                    <ul>
                        <CommandLinks />
                        <br/>
                        {formFlag ? 
                            <CommandForm addACommand={addACommand} /> 
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