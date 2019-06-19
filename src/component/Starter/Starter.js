import React, { Component } from 'react'
import { Container, Row, Col, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Form, FormGroup, Input, Label } from 'reactstrap'
import './Starter.css'
import tuna_sashimi from '../../picture/starter/tuna_sashimi.jpg'
import prawn_tempura from '../../picture/starter/prawn_tempura.jpg'
import vietnamese_fresh_spring_rolls from '../../picture/starter/vietnamese_fresh_spring_rolls.jpg'
import { Link } from 'react-router-dom'
import Tuna from './Tuna';
import Prawn from './Prawn';
import Vietnamese from './Vietnamese';
export default class Starter extends Component {
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
            <Container className="p-5">
                <Row className="m-3"><Col>
                    <div style={{ fontWeight: '', fontSize: 48 }} className="d-flex">
                        <Link to='/'><div style={{ cursor: 'pointer', color: 'black' }}><i className="fas fa-caret-left mr" />  </div></Link>
                        <div className="ml-3 mr-3"> |</div> <div>Starter 起动机 </div>
                    </div>
                </Col></Row>

                <Tuna />
                <Prawn />
                <Vietnamese />




            </Container>
        )
    }
}
