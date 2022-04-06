import React, { useState, useContext } from 'react'
import { useParams } from "react-router-dom";
import { UserContext } from "./context/user";

const Command = (props) => {
    const {state} = useContext(UserContext);
    // const [error, setError] = useState("")
    const params = useParams();

    // if (error === "") {
        const command = state.user.commands.find(c => `${c.id}` === params.id)
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
    // } else {
    //     return (
    //         <h3>{error}</h3>
    //     )
    // }
}

export default Command
