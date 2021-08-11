import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from "./context/user";

const CommandLinks = () => {
    const {commands, deleteCommand} = useContext(UserContext);
    const commandsList = commands.map(c =>
        <div key={c.id}>
            <Link to={`/commands/${c.id}`}>
                {c.name}
            </Link>  <button onClick={() => {deleteCommand(c.id)}}>  x</button>       
            <br />
        </div>
    )

    return (
        <ul>{commandsList}</ul>
    )
}

export default CommandLinks
