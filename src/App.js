import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import HeaderComponent from './component/Header/Header'

import Header2 from './component/Header/Header2'

import Home from './component/Home/Home'
import Cashier from './component/Cashier/Cashier'

import Footer from './component/Footer/Footer'
import Banner from './component/Banner/Banner'
import Starter from './component/Starter/Starter'
import Salads from './component/Salads/Salads'
import Soups from './component/Soups/Soups'
import Pasta from './component/Pasta/Pasta'
import Pizza from './component/Pizza/Pizza'
import Sandwiches from './component/Sandwiches/Sandwiches'
import Dessert from './component/Dessert/Dessert'
import Drink from './component/Drink/Drink'
import Header3 from './component/Header/Header3'

import Order from './component/Order/Order'
import EachOrder from './component/EachOrder/EachOrder';

export default class App extends Component {
	render() {
		return (
			<Router>
				{/* <HeaderComponent /> */}
				<Header2 />
				<Header3 />
				<Banner />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/cashier" component={Cashier} />

					<Route exact path="/starter" component={Starter} />
					<Route exact path="/salads" component={Salads} />
					<Route exact path="/soups" component={Soups} />
					<Route exact path="/pasta" component={Pasta} />

					<Route exact path="/pizza" component={Pizza} />
					<Route exact path="/sandwiches" component={Sandwiches} />
					<Route exact path="/dessert" component={Dessert} />
					<Route exact path="/drink" component={Drink} />

					<Route exact path="/order" component={Order} />
					<Route exact path="/order/:id" component={EachOrder} />
				</Switch>
				<Footer />
			</Router>
		)
	}
}
