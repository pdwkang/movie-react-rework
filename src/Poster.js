import React, { Component } from 'react'
import { Link } from 'react-router';
import Constants from './Constants';

class Poster extends Component{
	render(){
		// this.props.poster contains an entire movie object from parent
		var imagePath = Constants.imageBase + this.props.poster.poster_path;
		var posterLink = '/movie/' + this.props.poster.id;
		return(
			<div className="col-sm-6 col-md-3 movie-poster">
				<Link to={posterLink} ><img src={imagePath} /></Link>
			</div>
		)
	}
}

export default Poster;