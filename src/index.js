// dependencies (someone else made these)
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

// Custom modules/component
import App from './App';
import SingleMovie from './SingleMovie';
import Home from './Home'
import SearchResults from './SearchResults'

// Custom CSS
import './index.css';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="movie/:id" component={SingleMovie} />
			<Route path="search/:movieToSearchFor" component={SearchResults} />
		</Route>
	</Router>,
	document.getElementById('root')
);
