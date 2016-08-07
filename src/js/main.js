import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router' 

import Navigation from 'js/components/Navigation'
import Home from 'js/components/Home'
import Menu from 'js/components/Menu'
import Impressie from 'js/components/Impressie'

import 'less/main.less'

class App extends React.Component {
	render() { 
		return(
			<div>
				<Navigation/>
				<div className="main">
					{this.props.children}
				</div>
			</div>
		) 
	}
}

render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="menu" component={Menu}/>
			<Route path="impressie" component={Impressie}/>
		</Route>
	</Router>
), document.getElementById('root'))