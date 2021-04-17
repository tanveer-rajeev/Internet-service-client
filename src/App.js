import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Users from './components/Users/Users';
import AddAdmin from './components/Home/Admin/AddAdmin';
import ServiceController from "./components/Dashboard/ServiceController/ServiceController";
import ManageService from "./components/Dashboard/ServiceController/ManageService";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/appointment">
            <Appointment/>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
          <PrivateRoute path="/allPatients">
            <Users/>
          </PrivateRoute>
          <Route path="/addService">
            <ServiceController/>
          </Route>
          <Route path="/getServices">
            <ManageService/>
          </Route>
          <Route path="/addAdmin">
            <AddAdmin/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
