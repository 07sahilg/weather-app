import React,{Component} from 'react'
import fire from'../scripts/fire'
import firebase from 'firebase'
class LoginButton extends Component{
	state={
		isLoggedIn:false,
		user:null
	}
	componentDidMount(){
		firebase.auth().onAuthStateChanged(user =>{
  if (user) {
    this.setState({
    	isLoggedIn:true,
    	user
    })

 
  } 
  else {
    this.setState({
    	isLoggedIn:false,
    	user:null
    })
  }
});
	}
	_signIn(){
		var provider = new firebase.auth.GoogleAuthProvider();
		fire.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  console.log(token)
  var user = result.user;
  console.log(user)
}).catch(function(error) {
  console.log(error)
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

	}
	_signOut(){
		firebase.auth().signOut().then(function() {
  console.log('signed Out')
}).catch(function(error) {
  console.log('could not sign out')
});
	}

	render(){
		var {showProfile}=this.props
		return(
			<div>
					{this.state.isLoggedIn?
					<button onClick={()=>this._signOut()}>Sign Out</button>:
					<button onClick={()=>this._signIn()}>Sign in</button>

				}
				<br/>
						{
					this.state.user && showProfile?
					<div>
						<h3>NAME:{this.state.user.displayName}</h3>
						<h3>EMAIL:{this.state.user.email}</h3>
						<img src={this.state.user.photoURL} width={50} height={50}/>
					</div>:null
				}			
			</div>

			)
	}
}
export default LoginButton