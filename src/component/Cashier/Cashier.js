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
export default class Cashier extends Component {
	state = { order: [] }
	componentDidMount = () => {
		// const value = prompt('Please enter your password')
		// if (value === 'kuy') {
		// 	console.log('true')
		// 	this.getData()
		// } else {
		// 	console.log('false')
		// 	alert('Your Password Wrong !')
		// 	this.props.history.push('/')
		// }
		this.getData()
	}

	getData = () => {
		axios.get(`https://159.89.195.144:3013/vijitt-api/eachorder`).then(res => {
			const { data } = res
			console.log(data)
			this.setState({ order: data })
		})
	}
	renderTableHeader() {
		return this.state.order.map((e, index) => {
			return (
				<tr key={index + 1}>
					<th scope="row">{index + 1}</th>
					<td style={{ textAlign: 'center' }}>{e.username}</td>
					<td style={{ textAlign: 'center' }}>{e.room}</td>

					<td>
						{' '}
						<Link to={`/order/${e.id}`}>
							<Button type="button" color="primary">
							<i className="fas fa-search"/>
							</Button>
						</Link>
					</td>
				</tr>
			)
		})
	}

	render() {
		return (
			<div>
				{' '}
				<Container className="">
					<Row className="m-3">
						<Col>
							<div style={{ fontWeight: '', fontSize: 48 }} className="d-flex">
								<Link to="/">
									<div style={{ cursor: 'pointer', color: 'black' }}>
										<i className="fas fa-caret-left mr" />{' '}
									</div>
								</Link>
								<div className="ml-3 mr-3"> |</div> <div> Cashier </div>
							</div>
							<div className="">
								<div className="pt-5 pb-5">
									<h3>All Order</h3>
									<Table hover className="table-responsive">
										<thead>
											<tr>
												<th>No.</th>
												<th style={{ textAlign: 'center' }}>Username</th>
												<th style={{ textAlign: 'center' }}>Room</th>
												<th>{''}</th>
											</tr>
										</thead>
										<tbody>{this.renderTableHeader()}</tbody>
									</Table>
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
						<Col>
							<div className="pb-3 d-flex justify-content-center items-align-center">
								<h3>
									* Contact Room Service 405 <i className="fas fa-phone fa-1x" />
								</h3>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}
