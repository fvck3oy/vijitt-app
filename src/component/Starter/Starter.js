import React, { Component } from 'react'
import { Container, Row, Col, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Form, FormGroup, Input, Label } from 'reactstrap'
import './Starter.css'
import tuna_sashimi from '../../picture/starter/tuna_sashimi.jpg'
import prawn_tempura from '../../picture/starter/prawn_tempura.jpg'
import vietnamese_fresh_spring_rolls from '../../picture/starter/vietnamese_fresh_spring_rolls.jpg'
import { Link } from 'react-router-dom'
export default class Starter extends Component {
    render() {
        return (
            <Container className="p-5">
                <Row className="m-3"><Col>
                    <div style={{ fontWeight: '', fontSize: 48 }} className="d-flex">
                        <Link to='/'><div style={{ cursor: 'pointer', color: 'black' }}><i className="fas fa-caret-left mr" />  </div></Link>
                        <div className="ml-3 mr-3"> |</div> <div>Starter 起动机 </div>
                    </div>
                </Col></Row>
                <Row className="p-3">
                    <Col md={4}>
                        <Card className="m-2 each-food">
                            <div>
                                <CardImg
                                    top
                                    width="100%"
                                    src={tuna_sashimi}
                                    alt="Card image cap"
                                />
                            </div>


                        </Card>
                    </Col>
                    <Col md={8}>
                        <div className="d-flex detail-each-menu">
                            <div style={{ fontWeight: 'bold', fontSize: 24 }}>
                                Tuna Sashimi 金枪鱼生鱼片 							THB250
									</div>
                            <div>
                                -   Sliced of raw Tuna fillet with vegetable, sesame oil, wasabi and soy sauce
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
                                    src={prawn_tempura}
                                    alt="Card image cap"
                                />
                            </div>


                        </Card>
                    </Col>
                    <Col md={8}>
                        <div className="d-flex detail-each-menu">
                            <div style={{ fontWeight: 'bold', fontSize: 24 }}>
                                Prawn Tempura 虾天妇罗							THB250
									</div>
                            <div>
                                -   Deep fried tiger prawn in light tempura batter served with wasabi mayonnaise
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
