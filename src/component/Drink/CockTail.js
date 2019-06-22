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
import cocktail from '../../picture/drink/cocktail.jpg'

export default class CockTail extends Component {
	state = { menu_name: '', menu_value: 1, remark: '', price: 250 }
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
		if (this.state.menu_value <= 1) {
			this.setState({ menu_value: 1 })
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
								<CardImg top width="100%" src={cocktail} alt="Card image cap" />
							</div>
						</Card>
					</Col>
					<Col md={8}>
						<div className="d-flex detail-each-menu">
							<div style={{ fontWeight: 'bold', fontSize: 24 }}>Cocktail鸡尾酒</div>
							<div style={{ fontWeight: 'bold', marginTop: 30 }}>Mojito</div>
							<div>
								<div className="d-flex bd-highlight mt-2 mb-2">
									<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Havana</div>
									<div className="d-flex p-2 bd-highlight  align-items-center">THB 250</div>
								</div>

								<div className="d-flex bd-highlight mt-2 mb-2">
									<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Fresh Lemon</div>
									<div className="d-flex p-2 bd-highlight  align-items-center">THB 250</div>
								</div>

								<div className="d-flex bd-highlight mt-2 mb-2">
									<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Mint Leaf</div>
									<div className="d-flex p-2 bd-highlight  align-items-center">THB 250</div>
								</div>

								<div className="d-flex bd-highlight mt-2 mb-2">
									<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Brown Sugar</div>
									<div className="d-flex p-2 bd-highlight  align-items-center">THB 250</div>
								</div>
							</div>

							<div style={{ fontWeight: 'bold', marginTop: 30 }}>Moscow mule</div>
							<div>
								<div className="d-flex bd-highlight mt-2 mb-2">
									<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Vodka</div>
									<div className="d-flex p-2 bd-highlight  align-items-center">THB 250</div>
								</div>

								<div className="d-flex bd-highlight mt-2 mb-2">
									<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Fresh Ginger</div>
									<div className="d-flex p-2 bd-highlight  align-items-center">THB 250</div>
								</div>

								<div className="d-flex bd-highlight mt-2 mb-2">
									<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Lemon Wedge</div>
									<div className="d-flex p-2 bd-highlight  align-items-center">THB 250</div>
								</div>

								<div className="d-flex bd-highlight mt-2 mb-2">
									<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Ginger Ale</div>
									<div className="d-flex p-2 bd-highlight  align-items-center">THB 250</div>
								</div>
							</div>

							<div style={{ fontWeight: 'bold', marginTop: 30 }}>Chi Chi</div>
							<div>
								<div className="d-flex bd-highlight mt-2 mb-2">
									<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Vodka</div>
									<div className="d-flex p-2 bd-highlight  align-items-center">THB 250</div>
								</div>

								<div className="d-flex bd-highlight mt-2 mb-2">
									<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Malibu</div>
									<div className="d-flex p-2 bd-highlight  align-items-center">THB 250</div>
								</div>

								<div className="d-flex bd-highlight mt-2 mb-2">
									<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Pineapple juice</div>
									<div className="d-flex p-2 bd-highlight  align-items-center">THB 250</div>
								</div>

								<div className="d-flex bd-highlight mt-2 mb-2">
									<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Coconut milk</div>
									<div className="d-flex p-2 bd-highlight  align-items-center">THB 250</div>
								</div>
							</div>

							<div style={{ fontWeight: 'bold', marginTop: 30 }}>Gin Fizz</div>
							<div>
								<div className="d-flex bd-highlight mt-2 mb-2">
									<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Dry gin</div>
									<div className="d-flex p-2 bd-highlight  align-items-center">THB 250</div>
								</div>

								<div className="d-flex bd-highlight mt-2 mb-2">
									<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Triple sec</div>
									<div className="d-flex p-2 bd-highlight  align-items-center">THB 250</div>
								</div>

								<div className="d-flex bd-highlight mt-2 mb-2">
									<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Lemon juice and soda</div>
									<div className="d-flex p-2 bd-highlight  align-items-center">THB 250</div>
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

												<option value="mojito_havana">Mojito Havana</option>
												<option value="mojito_fresh_lamon">Mojito Fresh Lemon</option>
												<option value="mojito_mint_leaf">Mojito Mint Leaf</option>
												<option value="mojito_brown_sugar">Mojito Brown Sugar</option>

												<option value="moscow_mule_vodka">Moscow Mule Vodka</option>
												<option value="moscow_mule_fresh_ginger">Moscow Mule Fresh Lemon</option>
												<option value="moscow_mule_lemon_wedge">Moscow MuleLemon Wedge</option>
												<option value="moscow_mule_ginger_ale">Moscow Mule Ginger Ale</option>

												<option value="chi_chi_vodka">Chi ChiVodka</option>
												<option value="chi_chi_malibu">Chi Chi Malibu</option>
												<option value="chi_chi_pineapple_juice">Chi Chi Pineapple Juice</option>
												<option value="chi_chi_coconut_milk">Chi Chi Coconut Milk</option>

												<option value="gin_fizz_dry_gin">Gin Fizz Dry Gin</option>
												<option value="gin_fizz_triple_sec">Gin Fizz Triple Sec</option>
												<option value="gin_fizz_lemon_juice_and_soda">Gin Fizz Lemon Juice and Soda</option>
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
