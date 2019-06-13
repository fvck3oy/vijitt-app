import React, { Component } from 'react'
import {
	Container,
	Row,
	Col,
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
	Spinner,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Form,
	FormGroup,
	Label,
	Input
} from 'reactstrap'

export default class ModalBuy extends Component {
	constructor(props) {
		super(props)
		this.state = {
			modal: false,
			open: true,
			name: '',
			room: '',
			remark: '',
			food: ''
		}

		this.toggle = this.toggle.bind(this)
	}

	toggle() {
		this.setState({ open: !this.state.open })
		this.props.onClose()
	}
	sent = e => {
		e.preventDefault()
		console.log('sent !')
		this.toggle()
	}
	handleInputChange = e => {
		const { name, value } = e.target
		this.setState({ [name]: value })
		this.setState({ message: '' })
		console.log({ [name]: value })
	}
	render() {
		const { name, room, remark } = this.state
		const { onClose } = this.props
		return (
			<div>
				<Modal isOpen={this.state.open} toggle={onClose}>
					<ModalHeader toggle={this.toggle}>{this.props.food}</ModalHeader>
					<img
						src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.0-9/56551774_2118730481548223_6680520646209830912_n.jpg?_nc_cat=102&_nc_oc=AQmQZgMtcSsAjqpAQBuaF0nSlpUtHVN0lpBbNqInKzY0E6RSzpadIkeQDFp6s_oRVtA&_nc_ht=scontent.fbkk5-6.fna&oh=4a8339a02e54055d7dbada9319e58e45&oe=5D83F60F"
						className="img-fluid"
						alt="Cinque Terre"
					/>
					<div className="p-3">
						<Form onSubmit={this.sent}>
							<FormGroup row>
								<Label sm={2}>Name</Label>
								<Col sm={10}>
									<Input type="text" name="name" value={name} onChange={this.handleInputChange} placeholder="Your Name" />
								</Col>
								<Label sm={2}>Room</Label>
								<Col sm={10}>
									<Input type="text" name="room" value={room} onChange={this.handleInputChange} placeholder="Your Number Room" />
								</Col>
								<Label sm={2}>Remark</Label>
								<Col sm={10}>
									<Input type="textarea" name="remark" value={remark} onChange={this.handleInputChange} placeholder="Your Remark" />
								</Col>
							</FormGroup>
							<ModalBody>
								Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
								dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
								proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							</ModalBody>
							<ModalFooter>
								<Button color="primary">Comfirm</Button>{' '}
							</ModalFooter>
						</Form>
					</div>
				</Modal>
			</div>
		)
	}
}
