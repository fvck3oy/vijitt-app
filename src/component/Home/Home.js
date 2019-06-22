import React, { Component } from 'react'
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import { Link } from 'react-router-dom'
import tuna_sashimi from '../../picture/starter/tuna_sashimi.jpg'
import caesar_salad from '../../picture/salads/caesar_salad.jpg'
import tomato_soup from '../../picture/soups/tomato_soup.jpg'
import spaghetti_with_baby_squid from '../../picture/pasta/spaghetti_with_baby_squid.jpg'
import vegetarian_pizza from '../../picture/pizza/vegetarian_pizza.jpg'
import the_vijitt_cheese_burger from '../../picture/sandwiches/the_vijitt_cheese_burger.jpg'
import mango_cheese_cake from '../../picture/dessert/mango_cheese_cake.jpg'
import cocktail from '../../picture/drink/cocktail.jpg'

import '../../App.css'
import './Home.css'
import ModalBuy from '../ModalBuy/ModalBuy'
export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			modal: false,
			toggle: false,
			food: ''
		}

		this.toggle = this.toggle.bind(this)
	}
	componentDidMount() {
		document.title = 'THE VIJITT RESORT PHUKET'
		// var oldItems = []
		var oldItems = JSON.parse(localStorage.getItem('order')) || []
		if (oldItems !== null) {
			
		} else {
			var oldItems = []

			localStorage.setItem('order', JSON.stringify(oldItems))
		}
		// var oldItems = JSON.parse(localStorage.getItem('order')) || [];
	}
	toggle(each) {
		const { toggle } = this.state
		console.log('Toggle : ', { toggle })
		this.setState({ toggle: !toggle })
		this.setState({ food: each })
		console.log('After Food : ', each)
	}

	render() {
		return (
			<Container className="p-5">
				<Row className="m-3" style={{ fontFamily: 'Parisienne', fontWeight: '', fontSize: 48 }}>
					Room Service
				</Row>
				<Row>
					<Col md={3}>
						<div className="">
							<Link to={'starter'}>
								<Card className="m-2 each-food">
									<div>
										<CardImg top width="100%" src={tuna_sashimi} alt="Card image cap" />
									</div>
									<CardBody>
										<CardTitle>Starters</CardTitle>
									</CardBody>
								</Card>
							</Link>
						</div>
					</Col>
					<Col md={3}>
						<div className="">
							<Link to={'salads'}>
								<Card className="m-2 each-food">
									<CardImg top width="100%" src={caesar_salad} alt="Card image cap" />
									<CardBody>
										<CardTitle>Salads</CardTitle>
									</CardBody>
								</Card>
							</Link>
						</div>
					</Col>
					<Col md={3}>
						<div className="">
							<Link to={'soups'}>
								<Card className="m-2 each-food">
									<CardImg top width="100%" src={tomato_soup} alt="Card image cap" />
									<CardBody>
										<CardTitle>Soups</CardTitle>
									</CardBody>
								</Card>
							</Link>
						</div>
					</Col>
					<Col md={3}>
						<div className="">
							<Link to={'pasta'}>
								<Card className="m-2 each-food">
									<CardImg top width="100%" src={spaghetti_with_baby_squid} alt="Card image cap" />
									<CardBody>
										<CardTitle>Pasta</CardTitle>
									</CardBody>
								</Card>
							</Link>
						</div>
					</Col>

					<Col md={3}>
						<div className="">
							<Link to={'pizza'}>
								<Card className="m-2 each-food">
									<CardImg top width="100%" src={vegetarian_pizza} alt="Card image cap" />
									<CardBody>
										<CardTitle>Pizza</CardTitle>
									</CardBody>
								</Card>
							</Link>
						</div>
					</Col>

					<Col md={3}>
						<div className="">
							<Link to={'sandwiches'}>
								<Card className="m-2 each-food">
									<CardImg top width="100%" src={the_vijitt_cheese_burger} alt="Card image cap" />
									<CardBody>
										<CardTitle>Sandwiches</CardTitle>
									</CardBody>
								</Card>
							</Link>
						</div>
					</Col>

					<Col md={3}>
						<div className="">
							<Link to={'dessert'}>
								<Card className="m-2 each-food">
									<CardImg top width="100%" src={mango_cheese_cake} alt="Card image cap" />
									<CardBody>
										<CardTitle>Dessert</CardTitle>
									</CardBody>
								</Card>
							</Link>
						</div>
					</Col>

					<Col md={3}>
						<div className="">
							<Link to={'drink'}>
								<Card className="m-2 each-food">
									<CardImg top width="100%" src={cocktail} alt="Card image cap" />
									<CardBody>
										<CardTitle>Drinks</CardTitle>
									</CardBody>
								</Card>
							</Link>
						</div>
					</Col>
				</Row>
				{/* {this.state.toggle && <ModalBuy onClose={() => this.toggle(false)} food={this.state.food} />} */}
			</Container>
		)
	}
}
