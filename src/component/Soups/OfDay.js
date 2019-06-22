import React, { Component } from 'react'
import { Container, Row, Col, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Form, FormGroup, Input } from 'reactstrap'
import './Soups.css'
import moment from 'moment'
import tomato_soup from '../../picture/soups/tomato_soup.jpg'
import asparagus_soup from '../../picture/soups/asparagus_soup.jpg'
import carrot_soup from '../../picture/soups/carrot_soup.jpg'
import chicken_cream_soup from '../../picture/soups/chicken_cream_soup.jpg'
import corn_soup from '../../picture/soups/corn_soup.jpg'
import potato_soup from '../../picture/soups/potato_soup.jpg'
import pumpkin_soup from '../../picture/soups/pumpkin_soup .jpg'
export default class OfDay extends Component {
    state = {
        toDay: '',picToday:'',menu_name: '', menu_value: 0, remark: '', price:230  , please:''  }
    componentDidMount = () => {
        var today = moment().format('dddd');
        this.setState({toDay : today})

        if(today==='Sunday'){
            this.setState({ picToday: corn_soup})
            this.setState({ menu_name: 'corn_soup'})
            console.log('to day is : ' , today);
        }else if(today==='Monday'){
            this.setState({ picToday: asparagus_soup})
            this.setState({ menu_name: 'asparagus_soup'})
            console.log('to day is : ' , today);
        }
        else if(today==='Tuesday'){
            this.setState({ picToday: potato_soup })
            this.setState({ menu_name: 'potato_soup'})
            console.log('to day is : ' , today);
        }
        else if(today==='Wednesday'){
            this.setState({ picToday:carrot_soup})
            this.setState({ menu_name: 'carrot_soup'})
            console.log('to day is : ' , today);
        }
        else if(today==='Thursday'){
            this.setState({ picToday: chicken_cream_soup})
            this.setState({ menu_name: 'chicken_cream_soup'})
            console.log('to day is : ' , today);
        }
        else if(today==='Friday'){
            this.setState({ picToday: tomato_soup})
            this.setState({ menu_name: ' tomato_soup'})
            console.log('to day is : ' , today);
        }
        else{
            this.setState({ picToday: pumpkin_soup})
            this.setState({ menu_name: 'pumpkin_soup'})
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

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
        this.setState({ please: '' })
        console.log({ [name]: value })
    }

    sentOrder = (e) => {
        e.preventDefault()
        if(this.state.menu_value>=1){
            var oldItems = JSON.parse(localStorage.getItem('order')) || [];

            console.log('');
            
            const newData = {
                // id: this.state.id,
                menu_name: this.state.menu_name,
                menu_value: this.state.menu_value,
                remark: this.state.remark,
                price: this.state.price
    
                // lesson: this.state.tags.map($objTag => {
                // 	return { name: $objTag.name }
                // }),
    
            }
            oldItems.push(newData);
            localStorage.setItem('order', JSON.stringify(oldItems));
            console.log(' data : ', newData);
            this.setState({ menu_value: 0 })
            this.setState({ remark: '' })
        }else{
                    this.setState({ please:'please add amount'})
        }
       
    }




    minus = () => {

        if (this.state.menu_value <= 0) { this.setState({ menu_value: 0 }) }
        else { this.setState({ menu_value: this.state.menu_value - 1 }) }
        console.log('value : ', this.state.menu_value);
        this.setState({ please: '' })
    }
    plus = () => {

        this.setState({ menu_value: this.state.menu_value + 1 })
        console.log('value2 : ', this.state.menu_value);
        this.setState({ please: '' })
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
                                <div className="mb-2">
                                            <button type="button" className="btn-value mr-2" onClick={this.minus}><i className="fas fa-minus"></i></button>
                                            {this.state.menu_value}
                                            <button type="button" className="btn-value ml-2" onClick={this.plus}><i className="fas fa-plus"></i></button>
                                        </div>
                                </div>

                            </div>
                            <div style={{ color:'red'}}>{this.state.please}</div>
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
