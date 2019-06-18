import React, { Component } from 'react'
import { Container, Row, Col, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle ,Form , FormGroup , Input } from 'reactstrap'
import './Pizza.css'
import { Link } from 'react-router-dom'
import margherita from '../../picture/pizza/margherita.jpg'
import hawaiian_pizza from '../../picture/pizza/hawaiian_pizza.jpg'
import bbq_chicken_pizza from '../../picture/pizza/bbq_chicken_pizza.jpg'
import vegetarian_pizza from '../../picture/pizza/vegetarian_pizza.jpg'
export default class Pizza extends Component {
    render() {
        return (
            <Container className="p-5">
            <Row className="m-3"><Col>
            <div style={{ fontWeight: '', fontSize: 48 }} className="d-flex">
                        <Link to='/'><div style={{ cursor: 'pointer' , color:'black'}}><i className="fas fa-caret-left mr" />  </div></Link>
                        <div className="ml-3 mr-3"> |</div> <div>Pizza 比萨 </div>
                    </div>
            </Col></Row>
            <Row className="p-3">
                <Col md={4}>
                    <Card className="m-2 each-food">
                        <div>
                            <CardImg
                                top
                                width="100%"
                                src={margherita} alt="Card image cap"
                            />
                        </div>


                    </Card>
                </Col>
                <Col md={8}>
                    <div className="d-flex detail-each-menu">
                    <div style={{ fontWeight: 'bold', fontSize: 24 }}>
                    Margherita 玛格丽塔						THB 250
                            </div>
                           <div>
                            -  Tomato, mozzarella cheese and oregano
                            </div>
                        
                            <div className="d-flex bd-highlight mt-2 mb-2">
                                <div className="d-flex mr-auto p-2 bd-highlight align-items-center">
                                    <Button color="primary"><i className="fas fa-minus"></i></Button>
                                    <div className="mr-3 ml-3"> 0 </div>
                                    <Button color="primary"><i className="fas fa-plus"></i></Button>
                                </div>

                                <div className="p-2 bd-highlight">
                                    <Button color="success"><i className="fas fa-check"></i></Button>
                                </div>
                            </div>

                            <div className="">
                                <Form>
                                    <FormGroup>
                                        Remark <Input type="email" name="email" id="exampleEmail" placeholder="remark" />
                                    </FormGroup></Form>
                            </div>
                        </div>
                </Col>

            </Row>

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
                                    <Button color="primary"><i className="fas fa-minus"></i></Button>
                                    <div className="mr-3 ml-3"> 0 </div>
                                    <Button color="primary"><i className="fas fa-plus"></i></Button>
                                </div>

                                <div className="p-2 bd-highlight">
                                    <Button color="success"><i className="fas fa-check"></i></Button>
                                </div>
                            </div>

                            <div className="">
                                <Form>
                                    <FormGroup>
                                        Remark <Input type="email" name="email" id="exampleEmail" placeholder="remark" />
                                    </FormGroup></Form>
                            </div>
                        </div>
                </Col>
            </Row>

            <Row className="p-3">
                <Col md={4}>
                    <Card className="m-2 each-food">
                        <div>
                            <CardImg
                                top
                                width="100%"
                                src={bbq_chicken_pizza} alt="Card image cap"
                            />
                        </div>


                    </Card>
                </Col>
                <Col md={8}>
                    <div className="d-flex detail-each-menu">
                    <div style={{ fontWeight: 'bold', fontSize: 24 }}>
                    BBQ Chicken pizza 烧烤鸡肉比萨				THB 250
                            </div>
                        <div>
                            -  Tomato, BBQ chicken strips, mozzarella cheese, basil
                            </div>
                            <div className="d-flex bd-highlight mt-2 mb-2">
                                <div className="d-flex mr-auto p-2 bd-highlight align-items-center">
                                    <Button color="primary"><i className="fas fa-minus"></i></Button>
                                    <div className="mr-3 ml-3"> 0 </div>
                                    <Button color="primary"><i className="fas fa-plus"></i></Button>
                                </div>

                                <div className="p-2 bd-highlight">
                                    <Button color="success"><i className="fas fa-check"></i></Button>
                                </div>
                            </div>

                            <div className="">
                                <Form>
                                    <FormGroup>
                                        Remark <Input type="email" name="email" id="exampleEmail" placeholder="remark" />
                                    </FormGroup></Form>
                            </div>
                        </div>
                </Col>
            </Row>


            <Row className="p-3">
                <Col md={4}>
                    <Card className="m-2 each-food">
                        <div>
                            <CardImg
                                top
                                width="100%"
                                src={vegetarian_pizza}  alt="Card image cap"
                            />
                        </div>


                    </Card>
                </Col>
                <Col md={8}>
                    <div className="d-flex detail-each-menu">
                    <div style={{ fontWeight: 'bold', fontSize: 24 }}>
                    Vegetarian pizza 素食比萨饼					THB 250
                            </div>
                        <div>
                            -  Tomato, mozzarella cheese. Mushroom, artichokes, carrot, onion, asparagus, basil
                            </div>
                            <div className="d-flex bd-highlight mt-2 mb-2">
                                <div className="d-flex mr-auto p-2 bd-highlight align-items-center">
                                    <Button color="primary"><i className="fas fa-minus"></i></Button>
                                    <div className="mr-3 ml-3"> 0 </div>
                                    <Button color="primary"><i className="fas fa-plus"></i></Button>
                                </div>

                                <div className="p-2 bd-highlight">
                                    <Button color="success"><i className="fas fa-check"></i></Button>
                                </div>
                            </div>

                            <div className="">
                                <Form>
                                    <FormGroup>
                                        Remark <Input type="email" name="email" id="exampleEmail" placeholder="remark" />
                                    </FormGroup></Form>
                            </div>
                        </div>
                </Col>
            </Row>

        </Container>
        )
    }
}
