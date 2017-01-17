import React, { Component } from 'react'
import { Link } from 'react-router';
import Constants from './Constants';
import Config from './Config';
import $ from 'jquery';
class SearchResults extends Component{
	constructor(props) {
		super(props);
		this.state = {
			searchArray : []
		}
	}
	componentDidMount() {
		var searchPosterPathsArray = [];
		var searchedMovie = this.props.params.movieToSearchFor
		var url = Constants.baseUrl + 'search/movie?' + Config.api_key + '&language=en-US&page=1&include_adult=false&query=' + this.props.params.movieToSearchFor
		$.getJSON(url, (searchData)=>{
			console.log(searchData)
           this.setState({
        	searchArray: searchData.results
        	})
        });
	}	
	render(){
		return(
			<div>		
				{this.state.searchArray.map((poster, index) => {
					var imageUrl = "http://image.tmdb.org/t/p/w300" + poster.poster_path
				return(
					<div key={index}>
						<img src={imageUrl} />
					</div>
					)
				})}
			</div>
		)
	}
}

export default SearchResults
