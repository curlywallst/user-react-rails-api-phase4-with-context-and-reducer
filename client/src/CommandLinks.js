import React from 'react'
import { Link } from 'react-router-dom'

const CommandLinks = ({commands}) => {
    const commandsList = commands.map(c =>
        <div key={c.id}>
            <Link to={`/commands/${c.id}`}>
                {c.name}
            </Link>         
            <br />
        </div>
    )

    return (
        <ul>{commandsList}</ul>
    )
}

export default CommandLinks
