import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import LoginButton from '../components/LoginButton.js'
import Header from '../components/Header'
import M from 'materialize-css'
class Home extends Component{
	componentDidMount(){
		var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {opacity:0.9});
	}
	
	render(){
		return(
			<div>
			<Header/>
				<h1>HOME PAGE</h1>  
				<Link to='/profile'> profile </Link>
				<br/>
				<Link to='/weather'>Weather </Link><br/>
				<LoginButton showProfile={true} />
				<a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
				 <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
  <div id="modal1" className="modal">
    <div className="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div className="modal-footer">
      <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>
   <div className="row">
    <div className="col s12 m6 l3">
      <div className="card-panel teal">
        <span className="white-text">I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
        </span>
      </div>
    </div>
    <div className="row">
    <div className="col s12 m6 l3">
      <div className="card-panel teal">
        <span className="white-text">I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
        </span>
      </div>
    </div>
    <div className="row">
    <div className="col s12 m6 l3">
      <div className="card-panel teal">
        <span className="white-text">I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
        </span>
      </div>
    </div>
    <div className="row">
    <div className="col s12 m6 l3">
      <div className="card-panel teal">
        <span className="white-text">I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
        </span>
      </div>
    </div>
    </div>
    </div>

    </div>

    </div>
  
  
  
			</div>

			)
	}
}
export default Home