import React,{Component} from 'react'

class Calculator extends Component{
	state={
		result:''
	}
	btnList=['7','8','9','/'
				,'4','5','6','+'
				,'1','2','3','-'
				,'.','0','*','=']
    shouldReset=false
	_handleClick(btnVal){
		var result=this.state.result
		if(btnVal==='='){
			this.setState({result:eval(result).toString()

				})
			this.shouldReset=true

		}
		else{
			if(this.shouldReset &&!['+','/','*'].includes(btnVal)){
				this.setState({
				result:btnVal.toString()

			})
			}
		 	else{
				this.setState({
				result:result+btnVal
				})
			}
		this.setState=false
	}
	}
			
	render(){
		return(
			<div>
				<h1>{this.state.result}</h1>
				{
					this.btnList.map((v,i)=>{
						return(
						<span key={i}>
							<button onClick={()=>this._handleClick(v)} 
							>{v}</button>
								{
									(i+1)%4===0?<br/>:null
								}
						</span>
						)
					})
				}
			</div>

			)
	}
} 
export  default Calculator