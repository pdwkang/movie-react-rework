// Dependencies/Components
import React, { Component } from 'react';
import $ from 'jquery';

// Custom componenets/modules
import Poster from './Poster';
import Constants from './Constants'
import Config from './Config'
import './App.css';
import DiscoverButton from './DiscoverButton'


class Home extends Component{
	constructor(props) {
		super(props);
		this.handleCategoryChange = this.handleCategoryChange.bind(this);
		this.state = {
			moviePosters: []
		}		
	}
	// custom function to update homes state var from the child button
	handleCategoryChange(categoryApiUrl){
		var url = Constants.baseUrl + categoryApiUrl + Config.api_key
		$.getJSON(url, (categoryData)=>{
            // console.log(movieData);
            this.setState({
                moviePosters: categoryData.results
            });
        });
	}

    componentDidMount() {
        var url = Constants.baseUrl + Constants.nowPlayingEP + Config.api_key;
        $.getJSON(url, (movieData)=>{
            // console.log(movieData);
            this.setState({
                moviePosters: movieData.results
            });
        });
    }
	render(){
        var postersArray = [];
        this.state.moviePosters.map((poster,index) =>{
            postersArray.push(<Poster poster={poster} key={index} />)
        });
        // Build buttons with discoverbutton component
        var discoverButtons = []
        Constants.discoverLinks.map((category, index)=>{
        	discoverButtons.push(
        		<DiscoverButton buttonLink={category.link} buttonText={category.buttonText} key={index} functionFromParent={this.handleCategoryChange} />
        	)
        })
        // Load up the postersArray array with Poster Components
        // console.log(this.props.children)
   		return(
   			<div>
				<h1>This is the home page!</h1>
				<div className="col-sm-12">{discoverButtons}</div>
				{postersArray}
			</div>
		)
	}
}

export default Home;