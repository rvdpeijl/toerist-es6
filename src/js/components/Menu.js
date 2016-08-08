import React from 'react'
import $ from 'jquery'
import _ from 'underscore'

const menuItemsUrl = "https://cdn.contentful.com/spaces/jwvrc23eb62u/entries?access_token=90879b907d5159e5b032b9a98f3fa93c5e40f0315a5c48a5e169a2e5e0eb4a01"

class Menu extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			categories: [],
			selectedCategory:  null
		}
	}

	componentWillMount() {
		var menuItems  = []
		var categories = []

		$.get(menuItemsUrl, (data) => {
			data.items.forEach(function(item) {
				if (item.fields.hasOwnProperty("category")) {
					menuItems.push(item.fields)
				} else {
					categories.push({ fields: item.fields, id: item.sys.id })
				}
			})
		}).done(() => {
			categories = categories.filter((category) => {
				return !category.fields.hasOwnProperty('price')
			})

			var combined = _.chain(menuItems)
				.groupBy((item) => { 
					return item.category.sys.id })
				.map((items, key) => {
					var category = _.findWhere(categories, { id: key })
					return { id: key, title: category.fields.title, items: items, order: category.fields.order }
				})
				.sortBy('order')
				.value()

			this.setState({
				categories: combined
			})
		})
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
			var category = _.findWhere(this.state.categories, { id: this.state.selectedCategory })
			content = (
				<div className="content">
					<h1 className="category-title">{category.title}</h1>
					<div className="menu-items">
						{
							category.items.map((item, key) => {
								return (
									<div key={key} className="menu-item">
										<span className="title">{item.title}</span>
										<span className="price">{item.price.toLocaleString('nl-NL', { style: 'currency', currency: 'EUR' })}</span>
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
							return <div key={category.id} className="btn btn-black btn-medium" onClick={this.selectCategory.bind(this, category.id)}>{category.title}</div>
						})
					}

					{content}
				</div>
			</div>
		)
	}
}

export default Menu