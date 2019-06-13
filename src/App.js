import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import HeaderComponent from './component/Header/Header'
import Home from './component/Home/Home'
import Cashier from './component/Cashier/Cashier'
import Chef from './component/Chef/Chef'
import Footer from './component/Footer/Footer'

export default class App extends Component {
	render() {
		return (
			<Router>
				<HeaderComponent />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/cashier" component={Cashier} />
					<Route exact path="/chef" component={Chef} />
				</Switch>
				<Footer />
			</Router>
		)
	}
}
