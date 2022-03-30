import "./App.css";
import React from "react";
import {Route,Switch,Redirect} from 'react-router-dom'
import Home from "./Screens/Home";
import NavBar from "./components/NavBar/navbar";
import NotFound from './components/NotFound/notfound'
import ReturnDetails from "./components/FormComponents/ReturnDetails";

function App() {  
  return (
    <React.Fragment>
      <NavBar/>
      <Switch>
        <Route path='/individuals' component={ReturnDetails}/>
        <Route path='/notfound' component={NotFound}/>
        <Route path='/' exact component={Home}/>
        <Redirect to='/notfound'/>
      </Switch>
     
      
    </React.Fragment>
  );
}

export default App;
