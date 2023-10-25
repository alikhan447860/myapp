import './App.css';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import About from './Components/About'
// import { useState } from 'react';\
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
 <Navbar title="TextUtils" about="About Us" />
 <div className="container my-3">
 <Switch>
      <Route exact path="/">
      <Textarea heading="Enter The Text here"/>
  
      </Route>
      <Route path="/about">
        <About />
      </Route>

    </Switch>

 </div>
 </Router>
  <About/>

    </>
  );
}

export default App;
