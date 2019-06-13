import React, { Component } from 'react'

export default class Cashier extends Component {
	componentDidMount = () => {
		const value = prompt('Please enter your password')
		if (value === 'kuy') {
			console.log('true')
		} else {
			console.log('false')
			alert('Your Password Wrong !')
			this.props.history.push('/')
		}
	}
	if
	render() {
		return <div>wrong</div>
	}
	render() {
		return <div>Cashier</div>
	}
}
