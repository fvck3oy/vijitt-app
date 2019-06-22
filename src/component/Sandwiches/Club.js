import React, { Component } from 'react'
import { Container, Row, Col, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Form, FormGroup, Input } from 'reactstrap'
import './Sandwiches.css'
import the_vijitt_club_sandwiches from '../../picture/sandwiches/the_vijitt_club_sandwiches.jpg'
export default class Club extends Component {
    state = { menu_name: 'club_sandwiches', menu_value: 1, remark: '',price:250 }
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
                                    src={the_vijitt_club_sandwiches} alt="Card image cap"
                                />
                            </div>


                        </Card>
                    </Col>
                    <Col md={8}>
                        <div className="d-flex detail-each-menu">
                            <div style={{ fontWeight: 'bold', fontSize: 24 }}>
                                The vijitt club sandwiches 俱乐部三明治			THB 250
                            </div>
                            <div>
                                - Chicken, ham, crispy bacon, fried egg, avocado, tomato, cucumber, and low fat mayonnaise with muesli bread served with French fries
                            </div>

                        
                            <div className="d-flex bd-highlight mt-2 mb-2">
                                <div className="d-flex mr-auto p-2 bd-highlight align-items-center">
                                <div className="mb-2">
                                            <button type="button" className="btn-value mr-2" onClick={this.minus}><i className="fas fa-minus"></i></button>
                                            {this.state.menu_value}
                                            <button type="button" className="btn-value ml-2" onClick={this.plus}><i className="fas fa-plus"></i></button>
                                        </div>
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
