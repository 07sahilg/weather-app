import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import fire from './fire' 
class oldProfile extends  Component{
	componentDidMount(){
		var id=this.props.match.params.id
			fire.database().ref('users/'+id).once('value')
				.then(snapshot=>{
							var user=snapshot.val();
							console.log(user)
				}).catch(()=>{
				console.log('could not find user')
			})
		}
			/*componentDidMount(){
//var id=this.props.match.params.id
  var id=this.state.id
		fire.database().ref('users/'+id).once('value')
			.then(snapshot=>{
				this.setState({name:snapshot.val().name,
					age:snapshot.val().age})
							console.log(snapshot.val())
				}).catch(()=>{
				console.log('could not find user')
			})
			
}*/
			render(){
		var id=this.props.match.params.id
		//var id=this.state.id
		return(
			<div>
			<br/>
				<p> PROFILE ID:
				<input value={this.state.id} onChange={(e)=>this.setState({id:e.target.value})}></input></p>
				
				<p>NAME:{this.state.name}</p>
				<p>AGE:{this.state.age}</p>
				<Link to='/'> back </Link>
			</div>
			)
	}
}
export default oldProfile