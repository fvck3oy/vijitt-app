import React, { Component } from 'react'
import {
	Container,
	Row,
	Col,
	Button,
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Form,
	FormGroup,
	Input,
	Label
} from 'reactstrap'
import './Drink.css'

import fruit_juice from '../../picture/drink/fruit_juice.jpg'

export default class Fruit extends Component {
	state = { menu_name: '', menu_value: 0, remark: '', price: 150 }
	componentDidMount = () => {
		// localStorage.setItem("order", JSON.stringify([{ name: 'kuy', age: 50 }]));
	}

	handleInputChange = e => {
		const { name, value } = e.target
		this.setState({ [name]: value })
		this.setState({ message: '' })
		console.log({ [name]: value })
	}

	sentOrder = e => {
		var oldItems = JSON.parse(localStorage.getItem('order')) || []
		console.log('')
		e.preventDefault()
		const newData = {
			// id: this.state.id,
			menu_name: this.state.menu_name,
			menu_value: this.state.menu_value,
			remark: this.state.remark,
			price: this.state.price
			// lesson: this.state.tags.map($objTag => {
			// 	return { name: $objTag.name }
			// }),
		}
		oldItems.push(newData)
		localStorage.setItem('order', JSON.stringify(oldItems))
		console.log(' data : ', newData)
		this.setState({ menu_value: 0 })
		this.setState({ remark: '' })
		this.setState({ menu_name: '' })
	}

	minus = () => {
		if (this.state.menu_value <= 0) {
			this.setState({ menu_value: 0 })
		} else {
			this.setState({ menu_value: this.state.menu_value - 1 })
		}
		console.log('value : ', this.state.menu_value)
	}
	plus = () => {
		this.setState({ menu_value: this.state.menu_value + 1 })
		console.log('value2 : ', this.state.menu_value)
	}
	render() {
		return (
			<div>
				<Row className="p-3">
					<Col md={4}>
						<Card className="m-2 each-food">
							<div>
								<CardImg top width="100%" src={fruit_juice} alt="Card image cap" />
							</div>
						</Card>
					</Col>
					<Col md={8}>
						<div className="d-flex detail-each-menu">
							<div style={{ fontWeight: 'bold', fontSize: 24 }}>Fruit Juice 果汁</div>
							<div>
								<div className="d-flex bd-highlight mt-2 mb-2">
									<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Apple</div>
									<div className="d-flex p-2 bd-highlight  align-items-center">THB 150</div>
								</div>

								<div className="d-flex bd-highlight mt-2 mb-2">
									<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Guava</div>
									<div className="d-flex p-2 bd-highlight  align-items-center">THB 150</div>
								</div>

								<div className="d-flex bd-highlight mt-2 mb-2">
									<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Lemon</div>
									<div className="d-flex p-2 bd-highlight  align-items-center">THB 150</div>
								</div>

								<div className="d-flex bd-highlight mt-2 mb-2">
									<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Mango</div>
									<div className="d-flex p-2 bd-highlight  align-items-center">THB 150</div>
								</div>

								<div className="d-flex bd-highlight mt-2 mb-2">
									<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Orange</div>
									<div className="d-flex p-2 bd-highlight  align-items-center">THB 150</div>
								</div>

								<div className="d-flex bd-highlight mt-2 mb-2">
									<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Pineapple</div>
									<div className="d-flex p-2 bd-highlight  align-items-center">THB 150</div>
								</div>

								<div className="d-flex bd-highlight mt-2 mb-2">
									<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Water Melon</div>
									<div className="d-flex p-2 bd-highlight  align-items-center">THB 150</div>
								</div>
								<div>
									<Form onSubmit={this.sentOrder}>
										<FormGroup>
											<Label for="exampleSelect">Select</Label>
											<Input
												type="select"
												name="menu_name"
												value={this.state.menu_name}
												id="exampleSelect"
												onChange={this.handleInputChange}
												required
											>
												<option value="">Please Select</option>
												<option value="Apple">Apple</option>
												<option value="Guava">Guava</option>
												<option value="Lemon">Lemon</option>
												<option value="Mango">Mango</option>
												<option value="Orange">Orange</option>
												<option value="Pineapple">Pineapple</option>
												<option value="Water Melon">Water Melon</option>
											</Input>
										</FormGroup>

										<div className="mb-2">
											<button type="button" className="btn-value mr-2" onClick={this.minus}>
												<i className="fas fa-minus" />
											</button>
											{this.state.menu_value}
											<button type="button" className="btn-value ml-2" onClick={this.plus}>
												<i className="fas fa-plus" />
											</button>
										</div>
										<FormGroup>
											Remark{' '}
											<Input type="text" name="remark" value={this.state.remark} placeholder="remark" onChange={this.handleInputChange} />
										</FormGroup>

										<Button color="success">
											Add to cart <i className="fas fa-check" />
										</Button>
									</Form>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		)
	}
}
