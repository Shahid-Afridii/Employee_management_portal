// import logo from './logo.svg';
import './App.css';
import Navbar1  from './components/common/navbar';
 import Inputfield from './components/input_field/input_field';
 import Dashboard from './components/dash_board/dashboard';

// function App() {
//   return (
//     <div>
//   <Navbar />
// <Dashboard/>
// <Inputfield/>
//     </div>
//   );

// }

// export default App;


import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
      <Navbar1/>

      
        <Switch>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/" >
            <Inputfield />
          </Route>
        
        </Switch>
      </div>
    </Router>
  );
}






