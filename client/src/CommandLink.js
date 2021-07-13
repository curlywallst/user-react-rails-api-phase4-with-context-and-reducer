import React from 'react'
import { Link } from 'react-router-dom'

const CommandLink = ({command}) => {
    return (
        <Link to={`/commands/${command.id}`}>
            {command.name}
        </Link>
    )
}

export default CommandLink
