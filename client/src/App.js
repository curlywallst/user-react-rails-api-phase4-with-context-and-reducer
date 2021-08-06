import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './Home'
import Navbar from './Navbar'
import Commands from './Commands'
import Login from './Login'
import Signup from './Signup'
import { UserProvider } from "./context/user";


function App(props) {

  return (
    <div className="App">
      <UserProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route path="/commands" component={Commands} />
          {/* <Route path="/commands/:id" component={Command} /> */}
        </Switch>
      </UserProvider>
    </div>
  );
}

export default App;
