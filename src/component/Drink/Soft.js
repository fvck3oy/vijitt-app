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

import soft_drink from '../../picture/drink/soft_drink.jpg'
export default class Soft extends Component {
	state = { menu_name: '', menu_value: 0, remark: '', price: 0 ,please:'' }
	componentDidMount = () => {
		// localStorage.setItem("order", JSON.stringify([{ name: 'kuy', age: 50 }]));
	}

	handleInputChange = e => {
		const { name, value } = e.target

		this.setState({ [name]: value })
		this.setState({ please: '' })
		if (value === 'Coke' || value === 'Sprite' || value === 'Soda Water' || value === 'Fanta') {
			this.setState({ price: 80 })
		} else {
			this.setState({ price: 90 })
		}
		console.log({ [name]: value })
	}
    sentOrder = (e) => {
        e.preventDefault()
        if(this.state.menu_value>=1){
            var oldItems = JSON.parse(localStorage.getItem('order')) || [];

            console.log('');
            
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
            oldItems.push(newData);
            localStorage.setItem('order', JSON.stringify(oldItems));
            console.log(' data : ', newData);
			this.setState({ menu_value: 0 })
			this.setState({ menu_name: '' })
            this.setState({ remark: '' })
        }else{
                    this.setState({ please:'please add amount'})
        }
       
    }




    minus = () => {

        if (this.state.menu_value <= 0) { this.setState({ menu_value: 0 }) }
        else { this.setState({ menu_value: this.state.menu_value - 1 }) }
        console.log('value : ', this.state.menu_value);
        this.setState({ please: '' })
    }
    plus = () => {

        this.setState({ menu_value: this.state.menu_value + 1 })
        console.log('value2 : ', this.state.menu_value);
        this.setState({ please: '' })
    }
	render() {
		return (
			<div>
				<Row className="p-3">
					<Col md={4}>
						<Card className="m-2 each-food">
							<div>
								<CardImg top width="100%" src={soft_drink} alt="Card image cap" />
							</div>
						</Card>
					</Col>
					<Col md={8}>
						<div className="d-flex detail-each-menu">
							<div style={{ fontWeight: 'bold', fontSize: 24 }}>Soft Drinks 汽水</div>
							<div>
								<div className="d-flex bd-highlight mt-2 mb-2">
									<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Coke</div>
									<div className="d-flex p-2 bd-highlight  align-items-center">THB 80</div>
								</div>

								<div className="d-flex bd-highlight mt-2 mb-2">
									<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Sprite</div>
									<div className="d-flex p-2 bd-highlight  align-items-center">THB 80</div>
								</div>

								<div className="d-flex bd-highlight mt-2 mb-2">
									<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Soda Water</div>
									<div className="d-flex p-2 bd-highlight  align-items-center">THB 80</div>
								</div>

								<div className="d-flex bd-highlight mt-2 mb-2">
									<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Fanta</div>
									<div className="d-flex p-2 bd-highlight  align-items-center">THB 80</div>
								</div>

								<div className="d-flex bd-highlight mt-2 mb-2">
									<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Ginger Ale</div>
									<div className="d-flex p-2 bd-highlight  align-items-center">THB 90</div>
								</div>

								<div className="d-flex bd-highlight mt-2 mb-2">
									<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Tonic Water</div>
									<div className="d-flex p-2 bd-highlight  align-items-center">THB 90</div>
								</div>
								<div className="d-flex bd-highlight mt-2 mb-2">
									<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Coke light</div>
									<div className="d-flex p-2 bd-highlight  align-items-center">THB 90</div>
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
												<option value="Coke">Coke</option>
												<option value="Sprite">Sprite</option>
												<option value="Soda Water">Soda Water</option>
												<option value="Fanta">Fanta</option>

												<option value="Ginger Ale">Ginger Ale</option>
												<option value="Tonic Water">Tonic Water</option>
												<option value="Coke Light">Coke Light</option>
											</Input>
										</FormGroup>
										{/* <FormGroup>
                                            Value <Input type="number" name="menu_value" value={this.state.menu_value} placeholder="menu_value" onChange={this.handleInputChange} required />
                                        </FormGroup> */}
										<div className="mb-2">
											<button type="button" className="btn-value mr-2" onClick={this.minus}>
												<i className="fas fa-minus" />
											</button>
											{this.state.menu_value}
											<button type="button" className="btn-value ml-2" onClick={this.plus}>
												<i className="fas fa-plus" />
											</button>
										</div>
										<div style={{ color:'red'}}>{this.state.please}</div>
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
