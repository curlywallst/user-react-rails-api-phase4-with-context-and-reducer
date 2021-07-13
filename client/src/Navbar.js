import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {

    if (props.loggedIn){
        return (
        <div>
            <h1>Hello {props.user.name}</h1>
            <br/>
            <button onClick={props.logoutUser} >Logout</button>
            <NavLink to="/commands">
                <button>Commands</button>
            </NavLink>
            <hr/>
        </div>
        )
    } else {
        return (
            <div>
                <br/>
                <NavLink to="/signup">
                    <button>Signup</button>
                </NavLink>
                <br/>

                <NavLink to="/login">
                    <button>Login</button>
                </NavLink>
                <hr/>
            </div>
        )
    }
}

export default Navbar
