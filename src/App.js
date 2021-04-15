import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddDoctor from "./Components/AddDoctor/AddDoctor";
import AllPatients from "./Components/AllPatients/AllPatients";
import Appointment from "./Components/Appointment/Appointment/Appointment";
import Dashboard from "./Components/Dashbord/Dashboard/Dashboard";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import PrivateRoute from "./Components/Login/Login/PrivateRoute/PrivateRoute";


export const UserContext = createContext();

    
function App() {

  const [loginUser,setLoginUser]=useState({});

  return (
    <UserContext.Provider value={[loginUser,setLoginUser]}>
      <Router>
        <h5>{loginUser.email}</h5>
        <Switch>
        
          < Route path="/appointment">
            <Appointment />
          </Route>

               
          <Route path="/dashboard/allPatients">
            <AllPatients />
          </Route>

          <Route path="/addDoctor">
            <AddDoctor />
          </Route>

          <PrivateRoute path="/dashboard/all">
            <Dashboard />
          </PrivateRoute>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>

      </Router>
    </UserContext.Provider>
  );
}

export default App;
