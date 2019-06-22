import React, { Component } from 'react'
import { Container, Row, Col, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Form, FormGroup, Input, Label } from 'reactstrap'
import './Starter.css'

import vietnamese_fresh_spring_rolls from '../../picture/starter/vietnamese_fresh_spring_rolls.jpg'
export default class Vietnamese extends Component {
    state = { menu_name: 'vietnamese_fresh_spring_rolls', menu_value: 1, remark: '',price:250 }
    componentDidMount = () => {
        // localStorage.setItem("order", JSON.stringify([{ name: 'kuy', age: 50 }]));

       
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
        this.setState({ message: '' })
        console.log({ [name]: value })
    }

    sentOrder = (e) => {
        var oldItems = JSON.parse(localStorage.getItem('order')) || [];

        console.log('');
        e.preventDefault()
        const newData = {
            // id: this.state.id,
            menu_name: this.state.menu_name,
            menu_value: this.state.menu_value,
            remark: this.state.remark,
            price:this.state.price

            // lesson: this.state.tags.map($objTag => {
            // 	return { name: $objTag.name }
            // }),

        }
        oldItems.push(newData);
        localStorage.setItem('order', JSON.stringify(oldItems));
        console.log(' data : ', newData);
        this.setState({ menu_value: 0 })
		this.setState({ remark: '' })
    }

  


    minus = () => {
        
        if (this.state.menu_value <= 1) { this.setState({ menu_value: 1 }) }
        else { this.setState({ menu_value: this.state.menu_value - 1 }) }
        console.log('value : ', this.state.menu_value);

    }
    plus = () => {
        
        this.setState({ menu_value: this.state.menu_value + 1 })
        console.log('value2 : ', this.state.menu_value);
    }
    render() {
        return (
            <div>
                   <Row className="p-3">
                    <Col md={4}>
                        <Card className="m-2 each-food">
                            <div>
                                <CardImg
                                    top
                                    width="100%"
                                    src={vietnamese_fresh_spring_rolls}
                                    alt="Card image cap"
                                />
                            </div>


                        </Card>
                    </Col>
                    <Col md={8}>
                        <div className="d-flex detail-each-menu">
                            <div style={{ fontWeight: 'bold', fontSize: 24 }}>
                                Vietnamese Fresh Spring Rolls 越南新鲜春卷 				THB250
									</div>
                            <div>
                                -   Fresh raw vegetables and prawn wrapped in fresh spring roll dough served with tamarind sauce	</div>
                            <div className="d-flex bd-highlight mt-2 mb-2">
                            <div className="mb-2">
                                            <button type="button" className="btn-value mr-2" onClick={this.minus}><i className="fas fa-minus"></i></button>
                                            {this.state.menu_value}
                                            <button type="button" className="btn-value ml-2" onClick={this.plus}><i className="fas fa-plus"></i></button>
                                        </div>


                            </div>

                            <div className="">
                                <Form onSubmit={this.sentOrder}>
                                <FormGroup>
                                            Remark <Input type="text" name="remark" value={this.state.remark} placeholder="remark" onChange={this.handleInputChange} />
                                        </FormGroup>
                                    <Button color="success">Add to cart <i className="fas fa-check"></i></Button>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
