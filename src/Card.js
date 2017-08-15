import React, { Component } from 'react';
import "./Card.css";



class Card extends Component {
	
	constructor(props){
		super(props);
		this.state={isHighlighted : false}
	}

	clickHandler(){

		this.setState({
			isHighlighted: !this.state.isHighlighted
		});

		// if (this.state.isHighlighted == true){
		// 	this.setState({isHighlighted : false})
		// } else {
		// 	this.setState({isHighlighted : true})
		// }
		
	}

	render() {
		return (
			<div className={this.state.isHighlighted ? 'highlight Card' :  'Card' } onClick={this.clickHandler.bind(this)}>
				<h4>{this.props.suit}</h4>
				<h4>{this.props.number}</h4>




			</div>
			)
	}
}

export default Card; 