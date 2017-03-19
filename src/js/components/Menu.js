import React from 'react'
import $ from 'jquery'
import _ from 'underscore'

const menuItemsUrl = "http://37.139.9.149:3000/api/v1/all"

class Menu extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			categories: [],
			selectedCategory:  null
		}
	}

	componentWillMount() {
		$.get(menuItemsUrl, (data) => {
			this.setState({
				categories: data
			});
		});
	}

	selectCategory(categoryId) {
		this.setState({ selectedCategory: categoryId })
	}

	formatMoney(n){
		return n.toFixed(2).replace(/(\d)(?=(\d{3})+\,)/g, '$1,');
	}

	render() {
		var content = <div/>
		if (this.state.selectedCategory) {
			var category = _.findWhere(this.state.categories, { _id: this.state.selectedCategory })
			content = (
				<div className="content">
					<h1 className="category-title">{category.name}</h1>
					<div className="menu-items">
						{
							category.products.map((product, key) => {
								return (
									<div key={key} className="menu-item">
										<span className="title">{product.name}</span>
										<span className="price">{product.price.toLocaleString('nl-NL', { style: 'currency', currency: 'EUR' })}</span>
									</div>)
							})
						}
					</div>
				</div>
			)
		} 

		return(
			<div id="menu">
				<div className="box with-heading">
					<h1 className="heading">Menu</h1>
					{
						this.state.categories.map((category) => {
							return <div key={category._id} className="btn btn-black btn-medium" onClick={this.selectCategory.bind(this, category._id)}>{category.name}</div>
						})
					}

					{content}
				</div>
			</div>
		)
	}
}

export default Menu