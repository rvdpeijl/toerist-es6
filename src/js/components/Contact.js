import React from 'react'

class Contact extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<div id="contact">
				<div className="box with-heading">
					<h1 className="heading">Contact</h1>

					<p>Onze locatie:</p>
					<p className="bold">
						<span>Spaarndammerdijk 98</span>
						<span>2063 JX</span>
						<span>Spaarndam</span>
						<span>023 537 6000</span>
					</p>

					<p>U kunt reserveren door te bellen naar:</p>
					<span className="large">023 537 6000</span>

					<p>Heeft u vragen of opmerkingen? Stuur een email naar:</p>
					<span className="large"><a href="mailto:info@cafedetoerist.nl">info@cafedetoerist.nl</a></span>

				</div>
			</div>
		)
	}
}

export default Contact