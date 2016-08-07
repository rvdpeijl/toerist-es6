import React from 'react'
import { Link } from 'react-router'

class Navigation extends React.Component {
	render() {
		return(
			<nav className="navigation">
				<ul className="navbar left">
					<li><Link className="red" to="/">Home</Link></li>
					<li><Link className="red" to="/menu">Menu</Link></li>
				</ul>

				<Link to="/">
					<img className="logo" src="/img/logo-new-white.png"/>
				</Link>

				<ul className="navbar right">
					<li><Link className="white" to="/impressie">Impressie</Link></li>
					<li><Link className="white" to="/contact">Contact</Link></li>
				</ul>
			</nav>
		)
	}
}

export default Navigation