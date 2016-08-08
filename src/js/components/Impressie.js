import React from 'react'
import $ from 'jquery'

class Impressie extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			images: []
		}
	}

	componentWillMount() {
		const impressieUrl = "https://cdn.contentful.com/spaces/jwvrc23eb62u/assets?access_token=90879b907d5159e5b032b9a98f3fa93c5e40f0315a5c48a5e169a2e5e0eb4a01"

		$.get(impressieUrl, (data) => {
			this.setState({ images: data.items })
		})
	}

	render() {
		let content = <div/>

		if (this.state.images.length) {
			content = (
				<div className="image-list">
					{
						this.state.images.map((image, key) => {
							return <img key={key} src={image.fields.file.url}/>
						})
					}
				</div>
			)
		}

		return(
			<div id="impressie">
				<div className="box with-heading">
					<h1 className="heading">Impressie</h1>
					{content}
				</div>
			</div>
		)
	}
}

export default Impressie