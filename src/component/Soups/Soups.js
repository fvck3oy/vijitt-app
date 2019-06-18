import React, { Component } from 'react'
import { Container, Row, Col, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Form, FormGroup, Input } from 'reactstrap'
import './Soups.css'
import moment from 'moment'
import { Link } from 'react-router-dom'
import tomato_soup from '../../picture/soups/tomato_soup.jpg'
import asparagus_soup from '../../picture/soups/asparagus_soup.jpg'
import carrot_soup from '../../picture/soups/carrot_soup.jpg'
import chicken_cream_soup from '../../picture/soups/chicken_cream_soup.jpg'

import chicken_wonton_soup from '../../picture/soups/chicken_wonton_soup.jpg'
import corn_soup from '../../picture/soups/corn_soup.jpg'
import potato_soup from '../../picture/soups/potato_soup.jpg'
import pumpkin_soup from '../../picture/soups/pumpkin_soup .jpg'

export default class Soups extends Component {
    state = {
        toDay: '',picToday:''
    }
    componentDidMount = () => {
        var today = moment().format('dddd');
        this.setState({toDay : today})

        if(today==='Sunday'){
            this.setState({ picToday: corn_soup})
            console.log('to day is : ' , today);
        }else if(today==='Monday'){
            this.setState({ picToday: asparagus_soup})
            console.log('to day is : ' , today);
        }
        else if(today==='Tuesday'){
            this.setState({ picToday: potato_soup })
            console.log('to day is : ' , today);
        }
        else if(today==='Wednesday'){
            this.setState({ picToday:carrot_soup})
            console.log('to day is : ' , today);
        }
        else if(today==='Thursday'){
            this.setState({ picToday: chicken_cream_soup})
            console.log('to day is : ' , today);
        }
        else if(today==='Friday'){
            this.setState({ picToday: tomato_soup})
            console.log('to day is : ' , today);
        }
        else{
            this.setState({ picToday: pumpkin_soup})
            console.log('to day is : ' , today);
        }


        // this.setState({ picToday:})
        console.log('to day is ', today);
        // Monday		
        // Tuesday	
        // Wednesday	
        // Thursday		
        // Friday	
        // Saturday	
        // Sunda


    }
    render() {
        return (
            <Container className="p-5">
                <Row className="m-3">
                    <Col>
                    <div style={{ fontWeight: '', fontSize: 48 }} className="d-flex">
                        <Link to='/'><div style={{ cursor: 'pointer' , color:'black'}}><i className="fas fa-caret-left mr" />  </div></Link>
                        <div className="ml-3 mr-3"> |</div> <div>Soups 汤类 </div>
                    </div>
                    </Col></Row>
                <Row className="p-3">
                    <Col md={4}>
                        <Card className="m-2 each-food">
                            <div>
                                <CardImg
                                    top
                                    width="100%"
                                    src={this.state.picToday}alt="Card image cap"
                                />
                            </div>


                        </Card>
                        <div style={{ textAlign: 'center', color:'red'}}>* To day is {this.state.toDay}</div>
                    </Col>
                    <Col md={8}>
                        <div className="d-flex detail-each-menu">
                            <div style={{ fontWeight: 'bold', fontSize: 24 }}>
                                Soup of the Day 今日例汤							THB230
                            </div>
                            <div>
                                - Monday		Asparagas soup 芦笋汤<br />
                                - Tuesday		Potatoes soup 土豆汤<br />
                                - Wednesday	Carrot soup 胡萝卜汤<br />
                                - Thursday		Chicken Cream soup 鸡肉奶油汤<br />
                                - Friday		Tomatoes soup 西红柿汤<br />
                                - Saturday		Pumkin soup 南瓜汤<br />
                                - Sunday		Corn soup 玉米汤<br />

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
                                    src={chicken_wonton_soup} alt="Card image cap"
                                />
                            </div>


                        </Card>
                    </Col>
                    <Col md={8}>
                        <div className="d-flex detail-each-menu">
                            <div style={{ fontWeight: 'bold', fontSize: 24 }}>
                                Chicken Wonton 鸡馄饨 							THB200
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
