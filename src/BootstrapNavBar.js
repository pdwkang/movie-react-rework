import React, { Component } from 'react';
import { router, Link } from 'react-router';

class BootstrapNavBar extends Component{
	constructor(props) {
		super(props);
		this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
		this.state = {
		}
	}
	handleSearchSubmit(e){
		e.preventDefault();
		var inputBox = e.target[0].value
		console.log(this.props)
		console.log(inputBox)
		// this.props.router.push('/search/' + inputBox)
		// console.log(this.props.router)
		this.props.functionFromParent(inputBox)
	}
	render(){
		return(
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">WebSiteName</a>
					</div>
					<ul className="nav navbar-nav">
						<li className="active">
                            <Link to="/">Home</Link>
                        </li>
						<li><Link to="/nowPlaying">Now Playing</Link></li>
						<li><Link to="/topRated">Top Rated</Link></li>
						<form onSubmit={this.handleSearchSubmit}>
							<input type="text" />
							<button type='submit' placeholder="search.." className='btn btn-success'>
								search for movie
							</button>
						</form>
					</ul>
				</div>
			</nav>
		)		
	}
}

export default BootstrapNavBar;