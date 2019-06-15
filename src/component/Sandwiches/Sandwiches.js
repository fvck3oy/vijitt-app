import React, { Component } from 'react'
import { Container, Row, Col, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle ,Form , FormGroup , Input } from 'reactstrap'
import './Sandwiches.css'
import { Link } from 'react-router-dom'
import the_vijitt_cheese_burger from '../../picture/sandwiches/the_vijitt_cheese_burger.jpg'
import griied_chicken_pesto_sandwiches from '../../picture/sandwiches/griied_chicken_pesto_sandwiches.jpg'
import the_vijitt_club_sandwiches from '../../picture/sandwiches/the_vijitt_club_sandwiches.jpg'
export default class Sandwiches extends Component {
    render() {
        return (
            <Container className="p-5">
            <Row className="m-3"><Col>
            <div style={{ fontWeight: '', fontSize: 48 }} className="d-flex">
                        <Link to='/'><div style={{ cursor: 'pointer' , color:'black'}}><i className="fas fa-caret-left mr" /> Home </div></Link>
                        <div className="ml-3 mr-3"> |</div> <div>Sandwiches 三明治 </div>
                    </div>
                    </Col></Row>
            <Row className="p-3">
                <Col md={4}>
                    <Card className="m-2 each-food">
                        <div>
                            <CardImg
                                top
                                width="100%"
                                src={the_vijitt_club_sandwiches}  alt="Card image cap"
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
                                src={the_vijitt_cheese_burger} alt="Card image cap"
                            />
                        </div>


                    </Card>
                </Col>
                <Col md={8}>
                    <div className="d-flex detail-each-menu">
                    <div style={{ fontWeight: 'bold', fontSize: 24 }}>
                    The vijitt cheese burger	乳酪汉堡				THB 250												THB290
                            </div>
                        <div>
                            - Minced Angus beef with crispy bacon, cheddar cheese, lettuce, fresh tomato, pickle, red onion and homemade bun served with potato wedges
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
                                src={griied_chicken_pesto_sandwiches} alt="Card image cap"
                            />
                        </div>


                    </Card>
                </Col>
                <Col md={8}>
                    <div className="d-flex detail-each-menu">
                    <div style={{ fontWeight: 'bold', fontSize: 24 }}>
                    Grilled Chicken Pesto Sandwiches 烤鸡肉三明治		THB 250
                            </div>
                        <div>
                            - Grilled chicken with pesto, rocket and tomatoes with sweet & spicy house vinaigrette on home made bread
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
