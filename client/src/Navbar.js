import React, { useContext }  from 'react'
import { UserContext } from "./context/user";
import { NavLink,  useHistory} from 'react-router-dom'

const Navbar = () => {
    const {state, logout} = useContext(UserContext);
    const history = useHistory()
  
    const logoutUser = () => {
      fetch('/logout', {
        method: 'DELETE'
      })
      .then(() => {
        logout()
      })
      history.push('/')
    }

    if (state.user.name){
        return (
        <div>
            <h1>Hello {state.user.name}</h1>
            <br/>
            <button onClick={logoutUser} >Logout</button>
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
