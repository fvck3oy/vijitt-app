import React, { Component } from 'react'
import { Container, Row, Col, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Form, FormGroup, Input, Label } from 'reactstrap'
import './Drink.css'
import { Link } from 'react-router-dom'
import cocktail from '../../picture/drink/cocktail.jpg'
import fruit_juice from '../../picture/drink/fruit_juice.jpg'
import local_beer from '../../picture/drink/local_beer.jpeg'

import milk_shake from '../../picture/drink/milk_shake.jpg'
import mocktail from '../../picture/drink/mocktail.jpg'
import soft_drink from '../../picture/drink/soft_drink.jpg'

export default class Drink extends Component {
    render() {
        return (
            <Container className="p-5">
                <Row className="m-3"><Col>
                <div style={{ fontWeight: '', fontSize: 48 }} className="d-flex">
                        <Link to='/'><div style={{ cursor: 'pointer' , color:'black'}}><i className="fas fa-caret-left mr" /> Home </div></Link>
                        <div className="ml-3 mr-3"> |</div> <div>Drink 喝 </div>
                    </div>
                </Col></Row>
                <Row className="p-3">
                    <Col md={4}>
                        <Card className="m-2 each-food">
                            <div>
                                <CardImg
                                    top
                                    width="100%"
                                    src={soft_drink}  alt="Card image cap"
                                />
                            </div>


                        </Card>
                    </Col>
                    <Col md={8}>
                        <div className="d-flex detail-each-menu">
                            <div style={{ fontWeight: 'bold', fontSize: 24 }}>
                                Soft Drinks 汽水
                            </div>
                            <div>
                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Coke  THB 150</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Sprite  THB 150</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Soda Water  THB 150</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Fanta  THB 150</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>


                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Ginger Ale  THB 90</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Tonic Water  THB 90</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>
                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Coke light  THB 90</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>

                                <div>
                                    Remark
                                    <div className="d-flex">
                                        <Input type="email" name="email" id="exampleEmail" placeholder="remark" />
                                        <Button color="success" className="ml-2"><i className="fas fa-check"></i></Button>
                                    </div>
                                </div>
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
                                    src={fruit_juice}    alt="Card image cap"
                                />
                            </div>
                        </Card>
                    </Col>
                    <Col md={8}>
                        <div className="d-flex detail-each-menu">
                            <div style={{ fontWeight: 'bold', fontSize: 24 }}>
                                Fruit Juice 果汁
                            </div>
                            <div>
                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Apple  THB 150</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Guava  THB 150</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Lemon  THB 150</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Mango  THB 150</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Orange  THB 150</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Pineapple  THB 150</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Water Melon  THB 150</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>
                                <div>
                                    Remark
                                    <div className="d-flex">
                                        <Input type="email" name="email" id="exampleEmail" placeholder="remark" />
                                        <Button color="success" className="ml-2"><i className="fas fa-check"></i></Button>
                                    </div>
                                </div>
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
                                    src={milk_shake}   alt="Card image cap"
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
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Banana  THB 160</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Chocolate Strawberry or vanilla  THB 160</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>
                                <div>
                                    Remark
                                    <div className="d-flex">
                                        <Input type="email" name="email" id="exampleEmail" placeholder="remark" />
                                        <Button color="success" className="ml-2"><i className="fas fa-check"></i></Button>
                                    </div>
                                </div>
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
                                    src={local_beer}   alt="Card image cap"
                                />
                            </div>
                        </Card>
                    </Col>
                    <Col md={8}>
                        <div className="d-flex detail-each-menu">
                            <div style={{ fontWeight: 'bold', fontSize: 24 }}>
                            Local Beer 当地啤酒
                            </div>
                            <div>
                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Chang Beer  THB 130</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Singha Beer  THB 130</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>
                                
                                <div>
                                    Remark
                                    <div className="d-flex">
                                        <Input type="email" name="email" id="exampleEmail" placeholder="remark" />
                                        <Button color="success" className="ml-2"><i className="fas fa-check"></i></Button>
                                    </div>
                                </div>
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
                                    src={mocktail}  alt="Card image cap"
                                />
                            </div>
                        </Card>
                    </Col>
                    <Col md={8}>
                        <div className="d-flex detail-each-menu">
                            <div style={{ fontWeight: 'bold', fontSize: 24 }}>
                            Mocktails非酒精鸡尾酒
                            </div>
                            <div style={{ fontWeight:'bold' , marginTop:30}}>The Vijitt Sunrise</div>
                          
                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Orange juice  THB 170</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Pineapple juice  THB 170</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Mango juice  THB 170</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>
                                
                                <div>
                                    Remark
                                    <div className="d-flex">
                                        <Input type="email" name="email" id="exampleEmail" placeholder="remark" />
                                        <Button color="success" className="ml-2"><i className="fas fa-check"></i></Button>
                                    </div>
                                </div>

                                <div style={{ fontWeight:'bold' , marginTop:30}}>Coco Colada</div>
                               
                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Pineapple juice  THB 170</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Mango juice  THB 170</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Coconut milk  THB 170</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>


                                <div>
                                    Remark
                                    <div className="d-flex">
                                        <Input type="email" name="email" id="exampleEmail" placeholder="remark" />
                                        <Button color="success" className="ml-2"><i className="fas fa-check"></i></Button>
                                    </div>
                                </div>
                           
                                <div style={{ fontWeight:'bold' , marginTop:30}}>Virgin Mojito</div>
                               
                               <div className="d-flex bd-highlight mt-2 mb-2">
                                   <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Fresh lemon  THB 170</div>
                                   <div className="d-flex p-2 bd-highlight  align-items-center">
                                       <Button color="primary"><i className="fas fa-minus"></i></Button>
                                       <div className="mr-3 ml-3"> 0 </div>
                                       <Button color="primary"><i className="fas fa-plus"></i></Button>
                                   </div>
                               </div>

                               <div className="d-flex bd-highlight mt-2 mb-2">
                                   <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Brown sugar  THB 170</div>
                                   <div className="d-flex p-2 bd-highlight  align-items-center">
                                       <Button color="primary"><i className="fas fa-minus"></i></Button>
                                       <div className="mr-3 ml-3"> 0 </div>
                                       <Button color="primary"><i className="fas fa-plus"></i></Button>
                                   </div>
                               </div>

                               <div className="d-flex bd-highlight mt-2 mb-2">
                                   <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Mint leaf  THB 170</div>
                                   <div className="d-flex p-2 bd-highlight  align-items-center">
                                       <Button color="primary"><i className="fas fa-minus"></i></Button>
                                       <div className="mr-3 ml-3"> 0 </div>
                                       <Button color="primary"><i className="fas fa-plus"></i></Button>
                                   </div>
                               </div>


                               <div>
                                   Remark
                                   <div className="d-flex">
                                       <Input type="email" name="email" id="exampleEmail" placeholder="remark" />
                                       <Button color="success" className="ml-2"><i className="fas fa-check"></i></Button>
                                   </div>
                               </div>

                               <div style={{ fontWeight:'bold' , marginTop:30}}>Honey Kiss Ginger</div>
                               
                               <div className="d-flex bd-highlight mt-2 mb-2">
                                   <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Natural honey  THB 170</div>
                                   <div className="d-flex p-2 bd-highlight  align-items-center">
                                       <Button color="primary"><i className="fas fa-minus"></i></Button>
                                       <div className="mr-3 ml-3"> 0 </div>
                                       <Button color="primary"><i className="fas fa-plus"></i></Button>
                                   </div>
                               </div>

                               <div className="d-flex bd-highlight mt-2 mb-2">
                                   <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Fresh ginger  THB 170</div>
                                   <div className="d-flex p-2 bd-highlight  align-items-center">
                                       <Button color="primary"><i className="fas fa-minus"></i></Button>
                                       <div className="mr-3 ml-3"> 0 </div>
                                       <Button color="primary"><i className="fas fa-plus"></i></Button>
                                   </div>
                               </div>

                               <div className="d-flex bd-highlight mt-2 mb-2">
                                   <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Lemon THB 170</div>
                                   <div className="d-flex p-2 bd-highlight  align-items-center">
                                       <Button color="primary"><i className="fas fa-minus"></i></Button>
                                       <div className="mr-3 ml-3"> 0 </div>
                                       <Button color="primary"><i className="fas fa-plus"></i></Button>
                                   </div>
                               </div>

                               <div className="d-flex bd-highlight mt-2 mb-2">
                                   <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Mint leaf and Ginger ale THB 170</div>
                                   <div className="d-flex p-2 bd-highlight  align-items-center">
                                       <Button color="primary"><i className="fas fa-minus"></i></Button>
                                       <div className="mr-3 ml-3"> 0 </div>
                                       <Button color="primary"><i className="fas fa-plus"></i></Button>
                                   </div>
                               </div>


                               <div>
                                   Remark
                                   <div className="d-flex">
                                       <Input type="email" name="email" id="exampleEmail" placeholder="remark" />
                                       <Button color="success" className="ml-2"><i className="fas fa-check"></i></Button>
                                   </div>
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
                                    src={cocktail}  alt="Card image cap"
                                />
                            </div>


                        </Card>
                    </Col>
                    <Col md={8}>
                        <div className="d-flex detail-each-menu">
                            <div style={{ fontWeight: 'bold', fontSize: 24 }}>
                            Cocktail鸡尾酒
                            </div>
                            <div style={{ fontWeight:'bold' , marginTop:30}}>Mojito</div>
                            <div>
                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Havana  THB 250</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Fresh lemon  THB 250</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Mint leaf  THB 250</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Brown sugar  THB 250</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>

                                <div>
                                    Remark
                                    <div className="d-flex">
                                        <Input type="email" name="email" id="exampleEmail" placeholder="remark" />
                                        <Button color="success" className="ml-2"><i className="fas fa-check"></i></Button>
                                    </div>
                                </div>
                            </div>

                            <div style={{ fontWeight:'bold' , marginTop:30}}>Moscow mule</div>
                            <div>
                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Vodka  THB 250</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Fresh ginger  THB 250</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Lemon wedge THB 250</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Ginger ale THB 250</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>

                                <div>
                                    Remark
                                    <div className="d-flex">
                                        <Input type="email" name="email" id="exampleEmail" placeholder="remark" />
                                        <Button color="success" className="ml-2"><i className="fas fa-check"></i></Button>
                                    </div>
                                </div>
                            </div>

                            <div style={{ fontWeight:'bold' , marginTop:30}}>Chi Chi</div>
                            <div>
                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Vodka  THB 250</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Malibu  THB 250</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Pineapple juice THB 250</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Coconut milk THB 250</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>

                                <div>
                                    Remark
                                    <div className="d-flex">
                                        <Input type="email" name="email" id="exampleEmail" placeholder="remark" />
                                        <Button color="success" className="ml-2"><i className="fas fa-check"></i></Button>
                                    </div>
                                </div>
                            </div>

                            <div style={{ fontWeight:'bold' , marginTop:30}}>Gin Fizz</div>
                            <div>
                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Dry gin  THB 250</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Triple sec THB 250</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2 mb-2">
                                    <div className="d-flex mr-auto p-2 bd-highlight align-items-center">Lemon juice and soda THB 250</div>
                                    <div className="d-flex p-2 bd-highlight  align-items-center">
                                        <Button color="primary"><i className="fas fa-minus"></i></Button>
                                        <div className="mr-3 ml-3"> 0 </div>
                                        <Button color="primary"><i className="fas fa-plus"></i></Button>
                                    </div>
                                </div>
                    

                                <div>
                                    Remark
                                    <div className="d-flex">
                                        <Input type="email" name="email" id="exampleEmail" placeholder="remark" />
                                        <Button color="success" className="ml-2"><i className="fas fa-check"></i></Button>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </Col>
                </Row>


            </Container>
        )
    }
}
