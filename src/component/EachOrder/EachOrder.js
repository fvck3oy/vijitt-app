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
export default class EachOrder extends Component {
	state = {
		order: [],
		username: '',
		room: ''
	}
	componentDidMount = () => {
		this.getData()
	}
	getData = () => {
		axios.get(`http://localhost:3013/vijitt-api/order/${this.props.match.params.id}`).then(res => {
			const { data } = res
			console.log('from params : ', data)
			this.setState({ order: data })
			const name = data[0].username
			const room = data[0].room
			this.setState({ username: name, room: room })
		})
	}
	renderTableHeader() {
		return this.state.order.map((e, index) => {
			return (
				<tr key={index + 1}>
					<th scope="row">{index + 1}</th>
					<td>{e.menu_name}</td>
					<td style={{ textAlign: 'center' }}>{e.menu_value}</td>
          <td >{e.remark}</td>
          {/* <td >{''}</td> */}
					{/* <td style={{ textAlign: 'center' }}>{e.username}</td> */}
					{/* <td style={{ textAlign: 'center' }}>{e.room}</td> */}
					{/* <td>
						{' '}
						<Button type="button" color="danger" onClick={() => this.toRemove(index)}>
							<i className="fas fa-times" />
						</Button>
					</td> */}
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
								<Link to="/cashier">
									<div style={{ cursor: 'pointer', color: 'black' }}>
										<i className="fas fa-caret-left mr" />{' '}
									</div>
								</Link>
								<div className="ml-3 mr-3"> |</div> <div>Each Order</div>
							</div>
							<div className="">
								<div className="pt-5 pb-5">
									<h3>
										From : {this.state.username} Room {this.state.room}
									</h3>
									<Table hover className="table-responsive">
										<thead>
											<tr>
												<th>No.</th>
												<th>OrderName</th>
												<th style={{ textAlign: 'center' }}>Amount</th>
                        <th >Remark</th>
												{/* <th style={{ textAlign:'center'}}>Username</th> */}
												{/* <th style={{ textAlign:'center'}}>Room</th> */}
												{/* <th>{''}</th> */}
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
