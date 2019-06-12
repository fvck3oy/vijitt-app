import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import HeaderComponent from './component/Header/Header'
import Home from './component/Home/Home'
import Footer from './component/Footer/Footer'

export default class App extends Component {
	render() {
		return (
			<Router>
				<HeaderComponent />
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
				{/* <Footer /> */}
			</Router>
		)
	}
}
