import React, { useContext }  from 'react'
import { UserContext } from "./context/user";

const Home = () => {
    
    const {state} = useContext(UserContext);

    if (!state.user.name) {
        return (<h3>Please Login or Signup</h3>)
    } else {
        return (
            <div>
                <h3>{state.user.name}'s Home Page</h3>
            </div>
        )
    }
}

export default Home