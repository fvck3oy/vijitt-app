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
	Label,
	Table
} from 'reactstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default class Order extends Component {
	state = {
		order: [],
		username: '',
		room: '',
		priceAll: 0
	}
	componentDidMount = () => {
		let order = JSON.parse(localStorage.getItem('order'))
		console.log('all order : ', order)
		this.setState({ order: order })
		order.map((e, index) => {
			this.state.priceAll = this.state.priceAll + e.menu_value * e.price
			console.log('price all : ', this.state.priceAll)
		})
		const lastPrice = (this.state.priceAll * 17) / 100 + this.state.priceAll
		console.log('last price : ', lastPrice)
		this.setState({ priceAll: lastPrice })
	}

	handleInputChange = e => {
		const { name, value } = e.target
		this.setState({ [name]: value })
		this.setState({ message: '' })
		console.log({ [name]: value })
	}

	sentOrder = e => {
		console.log('sent to DB !')
		e.preventDefault()
		let order = JSON.parse(localStorage.getItem('order'))
		console.log('Before sent : ', order)
		const data = {
			// order: this.state.order
			username: this.state.username,
			room: this.state.room,
			order: this.state.order.map($obj => {
				return { menu_name: $obj.menu_name, menu_value: $obj.menu_value, remark: $obj.remark }
			})
		}
		console.log('is : ', data)
		axios
			.post(`http://159.89.195.144:3013/vijitt-api/order`, data)
			.then(res => {
				const { data } = res
			})
			.then(this.clear())
		alert('Success !')
		this.props.history.push('/')
		console.log('res : ', { data })
	}

	clear = () => {
		localStorage.clear()
		let order = JSON.parse(localStorage.getItem('order'))
		console.log('check order : ', order)
		this.setState({ order: order })
	}

	toRemove = index => {
		console.log('index is ', index)
		const order = this.state.order
		const afterObject = order.filter((o, i) => i !== index)
		console.log('after : ', afterObject)
		localStorage.setItem('order', JSON.stringify(afterObject))
		this.getData()
	}
	getData = () => {
		let order = JSON.parse(localStorage.getItem('order'))
		this.setState({ order: order })
	}

	renderTableHeader() {
		return this.state.order.map((e, index) => {
			return (
				<tr key={index + 1}>
					<th scope="row">{index + 1}</th>
					<td>{e.menu_name}</td>
					<td style={{ textAlign: 'center' }}>{e.menu_value}</td>
					<td style={{ textAlign: 'center' }}>{e.remark}</td>
					<td style={{ textAlign: 'center' }}>{e.price}</td>
					<td>
						{' '}
						<Button type="button" color="danger" onClick={() => this.toRemove(index)}>
							<i className="fas fa-times" />
						</Button>
					</td>
				</tr>
			)
		})
	}

	render() {
		if (this.state.order === null || this.state.order === []) {
			return (
				<Container className="p-5">
					<Row className="m-3">
						<Col>
							<div style={{ fontWeight: '', fontSize: 48 }} className="d-flex">
								<Link to="/">
									<div style={{ cursor: 'pointer', color: 'black' }}>
										<i className="fas fa-caret-left mr" />{' '}
									</div>
								</Link>
								<div className="ml-3 mr-3"> |</div> <div> Order </div>
							</div>
							<div className="p-5">
								<div className="pb-5" style={{ color: 'red' }}>
									<h1>Order Empty . . .</h1>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			)
		} else {
			return (
				<Container className="">
					<Row className="m-3">
						<Col>
							<div style={{ fontWeight: '', fontSize: 48 }} className="d-flex">
								<Link to="/">
									<div style={{ cursor: 'pointer', color: 'black' }}>
										<i className="fas fa-caret-left mr" />{' '}
									</div>
								</Link>
								<div className="ml-3 mr-3"> |</div> <div> Order </div>
							</div>
							<div className="">
								<div className="pt-5 pb-5">
									<h3>My Order</h3>
									<Table hover className="table-responsive">
										<thead>
											<tr>
												<th>No.</th>
												<th>OrderName</th>
												<th>Amount</th>
												<th>Remark</th>
												<th>Price</th>
												<th>{''}</th>
											</tr>
										</thead>
										<tbody>{this.renderTableHeader()}</tbody>
									</Table>
									<div className="price" style={{ fontSize: '24px' }}>
										<div>
											Service Charge 10% and Tax 7%
										</div>
										<div className="d-flex">
											<div>Total price is</div>
											<div className="mr-2 ml-2" style={{ color: 'red' }}>
												{this.state.priceAll}
											</div>
											<div>baht</div>
										</div>
									</div>

									{/* {this.state.order.map((e, index) =>
                                    <div key={index}>{e.menu_name}  : {e.menu_value} จำนวน 
                                    <Button type='button' color="primary" onClick={()=>this.toRemove(index)}>REMOVE</Button>
                                    
                                    </div>)} */}

									{/* <Button color='danger' onClick={this.clear} className="mt-2">Clear Order <i className="fas fa-times" /></Button> */}
								</div>
							</div>
						</Col>
					</Row>

					<Row className="m-3">
						<Col md={4} offset={4}>
							<div className="pb-5">
								<h1>Address</h1>
								<Form onSubmit={this.sentOrder}>
									<FormGroup>
										Name{' '}
										<Input
											type="text"
											name="username"
											value={this.state.username}
											placeholder="please fill your name"
											onChange={this.handleInputChange}
											required
										/>
									</FormGroup>
									<FormGroup>
										Room No{' '}
										<Input
											type="text"
											name="room"
											value={this.state.room}
											placeholder="please fill your room"
											onChange={this.handleInputChange}
											required
										/>
									</FormGroup>
									<Button color="success">
										Confirm Order <i className="fas fa-check" />
									</Button>
								</Form>
							</div>
						</Col>
					</Row>

					<Row className="m-3">
						<Col>
							<div className="pb-3 d-flex justify-content-center items-align-center">
								<h3>
									* Contact Room Service 405 <i className="fas fa-phone fa-1x" />
								</h3>
							</div>
						</Col>
					</Row>
				</Container>
			)
		}
	}
}
