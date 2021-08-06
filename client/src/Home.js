import React, { useContext }  from 'react'
import { UserContext } from "./context/user";

const Home = () => {
    
    const {user} = useContext(UserContext);
    console.log("home context", user)

    if (!user) {
        return (<h3>Please Login or Signup</h3>)
    } else {
        return (
            <div>
                <h3>{user.name}'s Home Page</h3>
            </div>
        )
    }
}

export default Home