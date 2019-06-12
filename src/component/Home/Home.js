import React, { Component } from 'react'
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import '../../App.css'
import './Home.css'
import ModalBuy from '../ModalBuy/ModalBuy';
export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			toggle: false,
			food: ''
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle(each) {
		const { toggle } = this.state
		console.log('Toggle : ', { toggle });
		this.setState({ toggle: !toggle })
		this.setState({ food: each })
		console.log('After Food : ', each);

	}
	render() {
		return (
			<Container className="p-5">
				<h3>Popular Restaurants</h3>
				<Row>

					<Col md={3}>
						<div className="">
							<Card className="m-2 each-food" onClick={() => this.toggle('food1')}>
								<CardImg
									top
									width="100%"
									src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.0-9/56551774_2118730481548223_6680520646209830912_n.jpg?_nc_cat=102&_nc_oc=AQmQZgMtcSsAjqpAQBuaF0nSlpUtHVN0lpBbNqInKzY0E6RSzpadIkeQDFp6s_oRVtA&_nc_ht=scontent.fbkk5-6.fna&oh=4a8339a02e54055d7dbada9319e58e45&oe=5D83F60F"
									alt="Card image cap"
								/>
								<CardBody>
									<CardTitle>Food1</CardTitle>
									<CardSubtitle>Card subtitle</CardSubtitle>
									<CardText>n the card title and make up the bulk of the card's content.</CardText>

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
									src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.0-9/56551774_2118730481548223_6680520646209830912_n.jpg?_nc_cat=102&_nc_oc=AQmQZgMtcSsAjqpAQBuaF0nSlpUtHVN0lpBbNqInKzY0E6RSzpadIkeQDFp6s_oRVtA&_nc_ht=scontent.fbkk5-6.fna&oh=4a8339a02e54055d7dbada9319e58e45&oe=5D83F60F"
									alt="Card image cap"
								/>
								<CardBody>
									<CardTitle>Food2</CardTitle>
									<CardSubtitle>Card subtitle</CardSubtitle>
									<CardText>n the card title and make up the bulk of the card's content.</CardText>

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
									src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.0-9/56551774_2118730481548223_6680520646209830912_n.jpg?_nc_cat=102&_nc_oc=AQmQZgMtcSsAjqpAQBuaF0nSlpUtHVN0lpBbNqInKzY0E6RSzpadIkeQDFp6s_oRVtA&_nc_ht=scontent.fbkk5-6.fna&oh=4a8339a02e54055d7dbada9319e58e45&oe=5D83F60F"
									alt="Card image cap"
								/>
								<CardBody>
									<CardTitle>Food3</CardTitle>
									<CardSubtitle>Card subtitle</CardSubtitle>
									<CardText>n the card title and make up the bulk of the card's content.</CardText>

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
									src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.0-9/56551774_2118730481548223_6680520646209830912_n.jpg?_nc_cat=102&_nc_oc=AQmQZgMtcSsAjqpAQBuaF0nSlpUtHVN0lpBbNqInKzY0E6RSzpadIkeQDFp6s_oRVtA&_nc_ht=scontent.fbkk5-6.fna&oh=4a8339a02e54055d7dbada9319e58e45&oe=5D83F60F"
									alt="Card image cap"
								/>
								<CardBody>
									<CardTitle>Food4</CardTitle>
									<CardSubtitle>Card subtitle</CardSubtitle>
									<CardText>n the card title and make up the bulk of the card's content.</CardText>

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
									src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.0-9/56551774_2118730481548223_6680520646209830912_n.jpg?_nc_cat=102&_nc_oc=AQmQZgMtcSsAjqpAQBuaF0nSlpUtHVN0lpBbNqInKzY0E6RSzpadIkeQDFp6s_oRVtA&_nc_ht=scontent.fbkk5-6.fna&oh=4a8339a02e54055d7dbada9319e58e45&oe=5D83F60F"
									alt="Card image cap"
								/>
								<CardBody>
									<CardTitle>Food5</CardTitle>
									<CardSubtitle>Card subtitle</CardSubtitle>
									<CardText>n the card title and make up the bulk of the card's content.</CardText>

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
