// Dependencies
import React, { Component } from 'react';

// Custom modules/components
import BootstrapNavBar from './BootstrapNavBar';

// CUstom CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { router, Link } from 'react-router';
 
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: ''
		}
		this.handleSearch = this.handleSearch.bind(this)
	}

	handleSearch(searchTextFromChild){
		this.props.router.push(encodeURI('/search/'+ searchTextFromChild))
	}

	render() {
		return (
			<div className="container">
				<div className="row">
                    <BootstrapNavBar functionFromParent={this.handleSearch}/>
                    {this.props.children}
				</div>
			</div>
		);
	}
}

export default App;
