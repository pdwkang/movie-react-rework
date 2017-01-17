import React, { Component } from 'react';

class DiscoverButton extends Component{
	handleButtonClickChild(apiLink){
		this.props.functionFromParent(apiLink);
		console.log(apiLink)
	}

	render(){
		var apiLink = this.props.buttonLink
		var buttonText = this.props.buttonText
		return(
			<button className="btn btn-primary" onClick={()=>this.props.functionFromParent(apiLink)} >
				{buttonText}
			</button>
		)
	}
}

export default DiscoverButton;
