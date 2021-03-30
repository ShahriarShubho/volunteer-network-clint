import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddEvent from './components/AddEvent/AddEvent';
import EventDetails from './components/EventDetails/EventDetails';
import LogIn from './components/LogIn/LogIn';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Header/>
      <h3>{loggedInUser.name}</h3>
      <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/addEvent">
           <AddEvent/>
          </Route>
          <Route path="/login">
           <LogIn/>
          </Route>
          <Route exact path="/">
          <Home/>
          </Route>
          <PrivateRoute exact path="/events/:eventId">
          <EventDetails/>
          </PrivateRoute>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
