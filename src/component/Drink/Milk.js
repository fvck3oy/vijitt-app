import React, { Component } from 'react'
import { Container, Row, Col, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Form, FormGroup, Input, Label } from 'reactstrap'
import './Drink.css'

import milk_shake from '../../picture/drink/milk_shake.jpg'



export default class Milk extends Component {
    state = { menu_name: '', menu_value: 0, remark: '' }
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
        console.log('');
        e.preventDefault()
        const data = {
            // id: this.state.id,
            menu_name: this.state.menu_name,
            menu_value: this.state.menu_value,
            remark: this.state.remark,

            // lesson: this.state.tags.map($objTag => {
            // 	return { name: $objTag.name }
            // }),

        }
        console.log(' data : ', data);
    }
    minus = () => {
        console.log('value : ', this.state.menu_value);

        if (this.state.menu_value <= 0) { this.setState({ menu_value: 0 }) }
        else { this.setState({ menu_value: this.state.menu_value - 1 }) }

    }
    plus = () => {
        console.log('value : ', this.state.menu_value);
        this.setState({ menu_value: this.state.menu_value + 1 })
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
                                    src={milk_shake} alt="Card image cap"
                                />
                            </div>
                        </Card>
                    </Col>
                    <Col md={8}>
                        <div className="d-flex detail-each-menu">
                            <div style={{ fontWeight: 'bold', fontSize: 24 }}>
                                Milk Shake 奶昔
                            </div>
                            <div>
                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Banana</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                    THB 160
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Chocolate Strawberry or vanilla</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                    THB 160
                                    </div>
                                </div>
                                <div>
                                    <Form onSubmit={this.sentOrder}>


                                        <FormGroup>
                                            <Label for="exampleSelect">Select</Label>
                                            <Input type="select" name='menu_name' value={this.state.menu_name} id="exampleSelect" onChange={this.handleInputChange} required>
                                                <option value="">Please Select</option>
                                                <option value="coke">Coke</option>
                                                <option value="sprite">Sprite</option>
                                                <option value="soda_water">Soda Water</option>
                                                <option value="fanta">Fanta</option>
                                                <option value="ginger_ale">Ginger Ale</option>
                                                <option value="tonic_water">Tonic Water</option>
                                                <option value="coke_light">Coke Light</option>
                                            </Input>
                                        </FormGroup>

                                        <div className="mb-2">
                                            <button type="button" className="btn-value mr-2" onClick={this.minus}><i className="fas fa-minus"></i></button> 
                                            {this.state.menu_value}
                                             <button type="button" className="btn-value ml-2" onClick={this.plus}><i className="fas fa-plus"></i></button>
                                        </div>
                                        <FormGroup>
                                            Remark <Input type="text" name="remark" value={this.state.remark} placeholder="remark" onChange={this.handleInputChange} required />
                                        </FormGroup>

                                        <Button color="success">Add to cart <i className="fas fa-check"></i></Button>
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
