import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
//import Calculator from './Calculator'
import Weather from './pages/Weather.js'
import Home from './pages/Home.js'
//import Profile from './oldProfile.js'
//import Fire from './Fire.js'
//import Titles from './Titles.js'
//import Form from './Form.js'  
function App() {
  return (
   <Router>
   		<div>
   			<Route exact path='/' component={Home}/>
   		
   			<Route exact path='/weather' component={Weather}/>
   		</div>
   </Router>
  );
}
export default App
																											