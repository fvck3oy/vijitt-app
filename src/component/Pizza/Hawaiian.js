import React, { Component } from 'react'
import { Container, Row, Col, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle ,Form , FormGroup , Input } from 'reactstrap'
import './Pizza.css'
import hawaiian_pizza from '../../picture/pizza/hawaiian_pizza.jpg'
export default class Hawaiian extends Component {
    state = { menu_name: 'hawaiian_pizza', menu_value: 0, remark: '' }
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
        // e.preventDefault()
        const newData = {
            // id: this.state.id,
            menu_name: this.state.menu_name,
            menu_value: this.state.menu_value,
            remark: this.state.remark,

            // lesson: this.state.tags.map($objTag => {
            // 	return { name: $objTag.name }
            // }),

        }
        oldItems.push(newData);
        localStorage.setItem('order', JSON.stringify(oldItems));
        console.log(' data : ', newData);
    }

  


    minus = () => {
        
        if (this.state.menu_value <= 0) { this.setState({ menu_value: 0 }) }
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
                                src={hawaiian_pizza} alt="Card image cap"
                            />
                        </div>


                    </Card>
                </Col>
                <Col md={8}>
                    <div className="d-flex detail-each-menu">
                    <div style={{ fontWeight: 'bold', fontSize: 24 }}>
                    Hawaiian  夏威夷						THB 250
                            </div>
                        <div>
                            -  Pizza Hawaiian style with cheese, ham and pineapple
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
