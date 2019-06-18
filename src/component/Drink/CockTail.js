import React, { Component } from 'react'
import { Container, Row, Col, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Form, FormGroup, Input, Label } from 'reactstrap'
import './Drink.css'
import cocktail from '../../picture/drink/cocktail.jpg'

export default class CockTail extends Component {
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
                                    src={cocktail} alt="Card image cap"
                                />
                            </div>


                        </Card>
                    </Col>
                    <Col md={8}>
                        <div className="d-flex detail-each-menu">
                            <div style={{ fontWeight: 'bold', fontSize: 24 }}>
                                Cocktail鸡尾酒
                            </div>
                            <div style={{ fontWeight: 'bold', marginTop: 30 }}>Mojito</div>
                            <div>
                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Havana</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        THB 250
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Fresh lemon</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        THB 250
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Mint leaf</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        THB 250
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Brown sugar</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        THB 250
                                    </div>
                                </div>


                            </div>

                            <div style={{ fontWeight: 'bold', marginTop: 30 }}>Moscow mule</div>
                            <div>
                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Vodka</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        THB 250
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Fresh ginger</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        THB 250
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Lemon wedg</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        THB 250
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Ginger al</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        THB 250
                                    </div>
                                </div>


                            </div>

                            <div style={{ fontWeight: 'bold', marginTop: 30 }}>Chi Chi</div>
                            <div>
                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Vodka</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        THB 250
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Malibu</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        THB 250
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Pineapple juic</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        THB 250
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Coconut mil</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        THB 250
                                    </div>
                                </div>


                            </div>

                            <div style={{ fontWeight: 'bold', marginTop: 30 }}>Gin Fizz</div>
                            <div>
                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Dry gin</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        THB 250
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Triple se</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        THB 250
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Lemon juice and sod</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        THB 250
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
                                            Remark <Input type="text" name="remark" value={this.state.remark} placeholder="remark" onChange={this.handleInputChange} />
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
