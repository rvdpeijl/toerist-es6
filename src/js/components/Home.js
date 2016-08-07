import React from 'react'
import { Link } from 'react-router'

class Home extends React.Component {
	render() {
		return(
			<div id="home">
				<div className="box with-heading">
					<h1 className="heading">Welkom</h1>
					<Link className="btn btn-black btn-large" to="/contact">Reserveren</Link>
					<p>Welkom op de website van Café Restaurant De Toerist in Spaarndam. Spaarndam is een pittoresk dorpje wat tegen Haarlem aanligt. Kenmerkend voor ons dorp zijn de oude dijken, sluisjes en natuurlijk Hansje Brinker! Op een van deze dijken is ons restaurant gevestigd, gezellig naast de grote sluis.</p>
					<p>Heeft u een feestje thuis te vieren? <Link to="/contact">Bel</Link> ons voor de mogelijkheden voor catering.</p>
					<p>
						<strong>Openingstijden:</strong><br/>
						<span>Maandag t/m zaterdag, 12:00 tot 00:00</span><br/>
						<span>Zondag, 11:00 tot 00:00</span>
					</p>
				</div>
			</div>
		)
	}
}

export default Home