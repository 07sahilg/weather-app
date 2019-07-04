 import React,{Component} from 'react'
class Weather extends Component{
	constructor(props){
		super(props);
	//	console.log("constructor")
		this.state={
		data:null,
		city:'DELHI'
		}
	}
	
	_getWeather(){
		var baseUrl="https://api.openweathermap.org/data/2.5/weather"
		var city=this.state.city
		var apiKey="bacaa6ae8d5badbde7491e9b746462f5"
		var url=`${baseUrl}?q=${city}&appid=${apiKey}`
		console.log(url)
		fetch(url).then(res=>{
			res.json().then((data)=>{
				this.setState({data})

			})
		})

	}
	componentDidMount(){
		//console.log("componentDidMount")
	
		this._getWeather()
			if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(loc=>console.log(loc))

		}

	}
	/*componentDidUpdate(){
		console.log("componentDidUpdate")
	}*/
	render(){
	//console.log("render")
		return(
			<div>
				<input value={this.state.city} onChange={(e)=>this.setState({city:e.target.value})}></input>
				<button onClick={()=>this._getWeather()}>Get Weather</button>
				{
					this.state.data?<div>Location:{this.state.data.name}<br/>
					Temperature:{Math.round(this.state.data.main.temp-273.15)}°C<br/>
					Description:{this.state.data.weather[0].description}
					<br/>
					<img src={"http://api.openweathermap.org/img/w/"+this.state.data.weather[0].icon+
					".png"}/>
					</div>
					:null
				}
				
			</div>
			)
	}

}
export default Weather