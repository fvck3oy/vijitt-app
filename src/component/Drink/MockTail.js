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

import mocktail from '../../picture/drink/mocktail.jpg'

export default class MockTail extends Component {
	state = { menu_name: '', menu_value: 0, remark: '', price: 170 ,please:''}
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
								<CardImg top width="100%" src={mocktail} alt="Card image cap" />
							</div>
						</Card>
					</Col>
					<Col md={8}>
						<div className="d-flex detail-each-menu">
							<div style={{ fontWeight: 'bold', fontSize: 24 }}>Mocktails非酒精鸡尾酒</div>
							<div style={{ fontWeight: 'bold', marginTop: 30 }}>The Vijitt Sunrise</div>

							<div className="d-flex bd-highlight mt-2 mb-2">
								<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Orange juice </div>
								<div className="d-flex p-2 bd-highlight  align-items-center">THB 170</div>
							</div>

							<div className="d-flex bd-highlight mt-2 mb-2">
								<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Pineapple juice</div>
								<div className="d-flex p-2 bd-highlight  align-items-center">THB 170</div>
							</div>

							<div className="d-flex bd-highlight mt-2 mb-2">
								<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Mango juice</div>
								<div className="d-flex p-2 bd-highlight  align-items-center">THB 170</div>
							</div>

							<div style={{ fontWeight: 'bold', marginTop: 30 }}>Coco Colada</div>

							<div className="d-flex bd-highlight mt-2 mb-2">
								<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Pineapple juice</div>
								<div className="d-flex p-2 bd-highlight  align-items-center">THB 170</div>
							</div>

							<div className="d-flex bd-highlight mt-2 mb-2">
								<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Mango juice</div>
								<div className="d-flex p-2 bd-highlight  align-items-center">THB 170</div>
							</div>

							<div className="d-flex bd-highlight mt-2 mb-2">
								<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Coconut milk</div>
								<div className="d-flex p-2 bd-highlight  align-items-center">THB 170</div>
							</div>

							<div style={{ fontWeight: 'bold', marginTop: 30 }}>Virgin Mojito</div>

							<div className="d-flex bd-highlight mt-2 mb-2">
								<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Fresh lemon</div>
								<div className="d-flex p-2 bd-highlight  align-items-center">THB 170</div>
							</div>

							<div className="d-flex bd-highlight mt-2 mb-2">
								<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Brown sugar</div>
								<div className="d-flex p-2 bd-highlight  align-items-center">THB 170</div>
							</div>

							<div className="d-flex bd-highlight mt-2 mb-2">
								<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Mint leaf</div>
								<div className="d-flex p-2 bd-highlight  align-items-center">THB 170</div>
							</div>

							<div style={{ fontWeight: 'bold', marginTop: 30 }}>Honey Kiss Ginger</div>

							<div className="d-flex bd-highlight mt-2 mb-2">
								<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Natural Honey</div>
								<div className="d-flex p-2 bd-highlight  align-items-center">THB 170</div>
							</div>

							<div className="d-flex bd-highlight mt-2 mb-2">
								<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Fresh Ginger</div>
								<div className="d-flex p-2 bd-highlight  align-items-center">THB 170</div>
							</div>

							<div className="d-flex bd-highlight mt-2 mb-2">
								<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Lemon</div>
								<div className="d-flex p-2 bd-highlight  align-items-center">THB 170</div>
							</div>

							<div className="d-flex bd-highlight mt-2 mb-2">
								<div className="d-flex mr-auto p-2 bd-highlight align-items-center">Mint leaf and Ginger ale</div>
								<div className="d-flex p-2 bd-highlight  align-items-center">THB 170</div>
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
											<option value="the_vijitt_sunrise_orange_juice">The Vijitt Sunrise Orange Juice</option>
											<option value="the_vijitt_sunrise_pineapple_juice">The Vijitt Sunrise Pineapple Juice</option>
											<option value="the_vijitt_sunrise_mango_juice">The Vijitt Sunrise Mango Juice</option>

											<option value="coco_colada_pineapple_juice">Coco Colada Pineapple Juice</option>
											<option value="coco_colada_mango_juice">Coco Colada Mango Juice</option>
											<option value="coco_colada_coconut_juice">Coco Colada Coconut Juice</option>

											<option value="virgin_mojito_fresh_lemon">Virgir Mojito Fresh Lemon</option>
											<option value="virgin_mojito_brown_sugar">Virgir Mojito Brown Sugar</option>
											<option value="virgin_mojito_mint_leaf">Virgir Mojito Mint Leaf</option>

											<option value="honey_kiss_ginger_natural_honey">Honey Kiss Ginger Natural Honey</option>
											<option value="honey_kiss_ginger_fresh_ginger">Honey Kiss Ginger Fresh Ginger</option>
											<option value="honey_kiss_ginger_lemon">Honey Kiss Ginger Lemon</option>
											<option value="honey_kiss_ginger_mint_leaf_and_ginger_ale">Honey Kiss Ginger Mint Leaf and Ginger ale</option>
										</Input>
									</FormGroup>

									{/* <div className="d-flex mb-2">
                                            <div onClick={this.minus} className="btn-value"><i className="fas fa-minus"></i></div>
                                            <div className="d-flex mr-3 ml-3 justify-content-center align-items-center"> {this.state.menu_value} </div>
                                            <div onClick={this.plus} className="btn-value"><i className="fas fa-plus"></i></div>
                                        </div> */}
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
					</Col>
				</Row>
			</div>
		)
	}
}
