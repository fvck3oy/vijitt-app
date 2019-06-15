import React, { Component } from 'react'
import { Container, Row, Col, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle ,Form , FormGroup , Input } from 'reactstrap'
import './Dessert.css'
import { Link } from 'react-router-dom'
import mango_cheese_cake from '../../picture/dessert/mango_cheese_cake.jpg'
import cream_brulee from '../../picture/dessert/cream_brulee.jpg'
import the_vijitt_combination from '../../picture/dessert/the_vijitt_combination.jpg'
import warm_apple_pie from '../../picture/dessert/warm_apple_pie.jpg'
export default class Dessert extends Component {
    render() {
        return (
            <Container className="p-5">
            <Row className="m-3"><Col>
            <div style={{ fontWeight: '', fontSize: 48 }} className="d-flex">
                        <Link to='/'><div style={{ cursor: 'pointer' , color:'black'}}><i className="fas fa-caret-left mr" /> Home </div></Link>
                        <div className="ml-3 mr-3"> |</div> <div>Dessert 甜点 </div>
                    </div>
            </Col></Row>
            <Row className="p-3">
                <Col md={4}>
                    <Card className="m-2 each-food">
                        <div>
                            <CardImg
                                top
                                width="100%"
                                src={cream_brulee} alt="Card image cap"
                            />
                        </div>


                    </Card>
                </Col>
                <Col md={8}>
                    <div className="d-flex detail-each-menu">
                    <div style={{ fontWeight: 'bold', fontSize: 24 }}>
                    Crème Brulee	焦糖布丁								THB 190
                            </div>
                            <div>
                                - The classic French Crème Brulee
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
                                src={warm_apple_pie} alt="Card image cap"
                            />
                        </div>


                    </Card>
                </Col>
                <Col md={8}>
                    <div className="d-flex detail-each-menu">
                    <div style={{ fontWeight: 'bold', fontSize: 24 }}>
                    Warm Apple Pie with Vanilla Ice Cream	温暖的苹果派和香草冰淇淋			THB 200
                            </div>
                        <div>
                            -  Classic apple pie UK favorite
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
                                src={mango_cheese_cake} alt="Card image cap"
                            />
                        </div>


                    </Card>
                </Col>
                <Col md={8}>
                    <div className="d-flex detail-each-menu">
                    <div style={{ fontWeight: 'bold', fontSize: 24 }}>
                    Mango Cheese Cake芒果芝士蛋糕							THB 190
                            </div>
                        <div>
                            - Smooth and creamy golden tropical flavor of mango
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
                                src={the_vijitt_combination} alt="Card image cap"
                            />
                        </div>


                    </Card>
                </Col>
                <Col md={8}>
                    <div className="d-flex detail-each-menu">
                    <div style={{ fontWeight: 'bold', fontSize: 24 }}>
                    The Vijitt Combination Miniature Desserts For Two迷你甜点的两种组合		THB 290
                            </div>
                        <div>
                            - Crème Brulee, Brownie Cake, Tiramisu, Pana cotta, Dark Chocolate Au Mousse
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
