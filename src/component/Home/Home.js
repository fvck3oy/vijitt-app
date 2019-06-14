import React, { Component } from 'react'
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
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
	componentDidMount(){
		document.title = "THE VIJITT RESORT PHUKET"
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
				<h3>Popular Restaurants</h3>
				<Row>
					<Col md={3}>
						<div className="">
							<Card className="m-2 each-food" onClick={() => this.toggle('food1')}>
							<div>
								<CardImg
									top
									width="100%"
									src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
									alt="Card image cap"
								/>
								</div>
								<CardBody>
									<CardTitle>Starters</CardTitle>
								</CardBody>
							</Card>
						</div>
					</Col>
					<Col md={3}>
						<div className="">
							<Card className="m-2 each-food" onClick={() => this.toggle('food2')}>
								<CardImg
									top
									width="100%"
									src="https://foodrevolution.org/wp-content/uploads/2018/03/blog-featured_healthy_foods-20180306.jpg"
									alt="Card image cap"
								/>
								<CardBody>
									<CardTitle>Salads</CardTitle>
								</CardBody>
							</Card>
						</div>
					</Col>
					<Col md={3}>
						<div className="">
							<Card className="m-2 each-food" onClick={() => this.toggle('food3')}>
								<CardImg
									top
									width="100%"
									src="https://static.toiimg.com/photo/68283907.cms"
									alt="Card image cap"
								/>
								<CardBody>
									<CardTitle>Soups</CardTitle>
								</CardBody>
							</Card>
						</div>
					</Col>
					<Col md={3}>
						<div className="">
							<Card className="m-2 each-food" onClick={() => this.toggle('food4')}>
								<CardImg
									top
									width="100%"
									src="https://foodrevolution.org/wp-content/uploads/2018/04/blog-featured-diabetes-20180406-1330.jpg"
									alt="Card image cap"
								/>
								<CardBody>
									<CardTitle>Pasta</CardTitle>
								</CardBody>
							</Card>
						</div>
					</Col>

					<Col md={3}>
						<div className="">
							<Card className="m-2 each-food" onClick={() => this.toggle('food5')}>
								<CardImg
									top
									width="100%"
									src="http://ew.content.allrecipes.com/sites/default/files/2019-01/eat-variety-healthy-foods-image.jpg"
									alt="Card image cap"
								/>
								<CardBody>
									<CardTitle>Pizza</CardTitle>
								</CardBody>
							</Card>
						</div>
					</Col>

					<Col md={3}>
						<div className="">
							<Card className="m-2 each-food" onClick={() => this.toggle('food5')}>
								<CardImg
									top
									width="100%"
									src="http://ew.content.allrecipes.com/sites/default/files/2019-01/eat-variety-healthy-foods-image.jpg"
									alt="Card image cap"
								/>
								<CardBody>
									<CardTitle>Sandwiches</CardTitle>
								</CardBody>
							</Card>
						</div>
					</Col>

					<Col md={3}>
						<div className="">
							<Card className="m-2 each-food" onClick={() => this.toggle('food5')}>
								<CardImg
									top
									width="100%"
									src="http://ew.content.allrecipes.com/sites/default/files/2019-01/eat-variety-healthy-foods-image.jpg"
									alt="Card image cap"
								/>
								<CardBody>
									<CardTitle>Dessert</CardTitle>
								</CardBody>
							</Card>
						</div>
					</Col>

					<Col md={3}>
						<div className="">
							<Card className="m-2 each-food" onClick={() => this.toggle('food5')}>
								<CardImg
									top
									width="100%"
									src="http://ew.content.allrecipes.com/sites/default/files/2019-01/eat-variety-healthy-foods-image.jpg"
									alt="Card image cap"
								/>
								<CardBody>
									<CardTitle>Drinks</CardTitle>
								</CardBody>
							</Card>
						</div>
					</Col>
				</Row>
				{this.state.toggle && <ModalBuy onClose={() => this.toggle(false)} food={this.state.food} />}
			</Container>
		)
	}
}
