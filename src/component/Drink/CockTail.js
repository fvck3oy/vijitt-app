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
	state = { menu_name: '', menu_value: 0, remark: '', price: 250  ,please:''}
	componentDidMount = () => {
		// localStorage.setItem("order", JSON.stringify([{ name: 'kuy', age: 50 }]));
	}

	handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
        this.setState({ please: '' })
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
			this.setState({ menu_name: '' })
            this.setState({ menu_value: 0 })
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

												<option value="Mojito Havana">Mojito Havana</option>
												<option value="Mojito Fresh Lemon">Mojito Fresh Lemon</option>
												<option value="Mojito Mint Leaf">Mojito Mint Leaf</option>
												<option value="Mojito Brown Sugar">Mojito Brown Sugar</option>

												<option value="Moscow Mule Vodka">Moscow Mule Vodka</option>
												<option value="Moscow Mule Fresh Lemon">Moscow Mule Fresh Lemon</option>
												<option value="Moscow MuleLemon Wedge">Moscow MuleLemon Wedge</option>
												<option value="Moscow Mule Ginger Ale">Moscow Mule Ginger Ale</option>

												<option value="Chi Chi Vodka">Chi Chi Vodka</option>
												<option value="Chi Chi Malibu">Chi Chi Malibu</option>
												<option value="Chi Chi Pineapple Juice">Chi Chi Pineapple Juice</option>
												<option value="Chi Chi Coconut Milkk">Chi Chi Coconut Milk</option>

												<option value="Gin Fizz Dry Gin">Gin Fizz Dry Gin</option>
												<option value="Gin Fizz Triple Sec">Gin Fizz Triple Sec</option>
												<option value="Gin Fizz Lemon Juice and Soda">Gin Fizz Lemon Juice and Soda</option>
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
