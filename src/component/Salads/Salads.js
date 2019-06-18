import React, { Component } from 'react'
import { Container, Row, Col, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Form, FormGroup, Input } from 'reactstrap'
import './Salads.css'
import { Link } from 'react-router-dom'
import caesar_salad from '../../picture/salads/caesar_salad.jpg'
import greek_salad from '../../picture/salads/greek_salad.jpg'
import smoked_duck_breast_salad from '../../picture/salads/smoked_duck_breast_salad.jpg'
import smoked_salman_salad from '../../picture/salads/smoked_salman_salad.jpg'
export default class Salads extends Component {
    render() {
        return (
            <Container className="p-5">
                <Row className="m-3"><Col>
                    <div style={{ fontWeight: '', fontSize: 48 }} className="d-flex">
                        <Link to='/'><div style={{ cursor: 'pointer', color: 'black' }}><i className="fas fa-caret-left mr" />  </div></Link>
                        <div className="ml-3 mr-3"> |</div> <div>Salads 沙拉 </div>
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
                                    src={smoked_salman_salad}
                                    alt="Card image cap"
                                />
                            </div>


                        </Card>
                    </Col>
                    <Col md={8}>
                        <div className="d-flex detail-each-menu">
                            <div style={{ fontWeight: 'bold', fontSize: 24 }}>
                                Smoked Salmon Salad 烟熏三文鱼沙拉 					THB250
                                </div>
                            <div>
                                -   Fresh lettuce salad with smoked salmon, avocado, cucumber, tomatoes, red onion served with orange vinaigrettle
                                </div>
                            <div className="d-flex bd-highlight mt-2 mb-2">
                                <div className="d-flex mr-auto p-2 bd-highlight align-items-center">
                                    <Button color="primary"><i className="fas fa-minus"></i></Button>
                                    <div className="mr-3 ml-3"> 0 </div>
                                    <Button color="primary"><i className="fas fa-plus"></i></Button>
                                </div>

                            </div>

                            <div className="">
                                <Form onSubmit={this.sentOrder}>
                                    <FormGroup>
                                        Remark <Input type="email" name="email" id="exampleEmail" placeholder="remark" />
                                    </FormGroup>
                                    <Button color="success">Add to cart <i className="fas fa-check"></i></Button>
                                </Form>
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
                                    src={caesar_salad} alt="Card image cap"
                                />

                            </div>


                        </Card>
                    </Col>
                    <Col md={8}>
                        <div className="d-flex detail-each-menu">
                            <div style={{ fontWeight: 'bold', fontSize: 24 }}>
                                Caesar Salad 凯撒沙拉								THB250
                                </div>
                            <div>
                                -   Roman lettuce, parmesan cheese, poached egg, bacon, with grilled chicken or shrimp and creamy Caesar dressing
                                </div>
                            <div className="d-flex bd-highlight mt-2 mb-2">
                                <div className="d-flex mr-auto p-2 bd-highlight align-items-center">
                                    <Button color="primary"><i className="fas fa-minus"></i></Button>
                                    <div className="mr-3 ml-3"> 0 </div>
                                    <Button color="primary"><i className="fas fa-plus"></i></Button>
                                </div>

                            </div>

                            <div className="">
                                <Form onSubmit={this.sentOrder}>
                                    <FormGroup>
                                        Remark <Input type="email" name="email" id="exampleEmail" placeholder="remark" />
                                    </FormGroup>
                                    <Button color="success">Add to cart <i className="fas fa-check"></i></Button>
                                </Form>
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
                                    src={greek_salad} alt="Card image cap"
                                />
                            </div>


                        </Card>
                    </Col>
                    <Col md={8}>
                        <div className="d-flex detail-each-menu">
                            <div style={{ fontWeight: 'bold', fontSize: 24 }}>
                                Greak Salad 希腊式沙拉							THB250
                                </div>
                            <div>
                                -   Feta cheese, cucumber, tomatoes, green pepper, red onion, black olivesand lemon dressing	</div>
                            <div className="d-flex bd-highlight mt-2 mb-2">
                                <div className="d-flex mr-auto p-2 bd-highlight align-items-center">
                                    <Button color="primary"><i className="fas fa-minus"></i></Button>
                                    <div className="mr-3 ml-3"> 0 </div>
                                    <Button color="primary"><i className="fas fa-plus"></i></Button>
                                </div>


                            </div>

                            <div className="">
                                <Form onSubmit={this.sentOrder}>
                                    <FormGroup>
                                        Remark <Input type="email" name="email" id="exampleEmail" placeholder="remark" />
                                    </FormGroup>
                                    <Button color="success">Add to cart <i className="fas fa-check"></i></Button>
                                </Form>
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
                                    src={smoked_duck_breast_salad} alt="Card image cap"
                                />
                            </div>


                        </Card>
                    </Col>
                    <Col md={8}>
                        <div className="d-flex detail-each-menu">
                            <div style={{ fontWeight: 'bold', fontSize: 24 }}>
                                Smoked Duck Breast Salad with Soya Dressing熏制鸭胸肉沙拉配大豆酱THB250
                                </div>
                            <div>
                                -   Soya dressing, orange, lettuce and almond grated	</div>
                            <div className="d-flex bd-highlight mt-2 mb-2">
                                <div className="d-flex mr-auto p-2 bd-highlight align-items-center">
                                    <Button color="primary"><i className="fas fa-minus"></i></Button>
                                    <div className="mr-3 ml-3"> 0 </div>
                                    <Button color="primary"><i className="fas fa-plus"></i></Button>
                                </div>


                            </div>
                            <div className="">
                                <Form onSubmit={this.sentOrder}>
                                    <FormGroup>
                                        Remark <Input type="email" name="email" id="exampleEmail" placeholder="remark" />
                                    </FormGroup>
                                    <Button color="success">Add to cart <i className="fas fa-check"></i></Button>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        )
    }
}
