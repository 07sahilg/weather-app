import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import fire from './fire' 
class Profile extends  Component{
	constructor(){
		super();
		this.state={
			id:'',
			name:'',
			age:''
		}
	}
/*00componentDidMount(){
		var id=this.props.match.params.id
			fire.database().ref('users/'+id).once('value')
				.then(snapshot=>{
							var user=snapshot.val();
							console.log(user)
				}).catch(()=>{
				console.log('could not find user')
			})
			}*/


_getProfile(){
	
}
render(){
		//var id=this.props.match.params.id
		var id=this.state.id
		return(
			<div>
			<br/>
				<p> PROFILE ID:
				<input value={this.state.id} onChange={(e)=>this.setState({id:e.target.value})}></input>
				<button onClick={()=>this._getProfile()}>FIND</button></p>
				<br/>
				<Link to='/'> back </Link>
			</div>
			)
	}
}
export default Profile