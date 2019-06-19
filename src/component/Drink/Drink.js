import React, { Component } from 'react'
import { Container, Row, Col, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Form, FormGroup, Input, Label } from 'reactstrap'
import './Drink.css'
import { Link } from 'react-router-dom'
import Soft from './Soft';
import Fruit from './Fruit';
import Milk from './Milk';
import Local from './Local';
import MockTail from './MockTail';
import CockTail from './CockTail';

export default class Drink extends Component {
    state = {}
    componentDidMount = () => {
       
        // var oldItems = JSON.parse(localStorage.getItem('order')) || [];

        // var newItem =
        // {
        //     'product-name': 'name',
        //     'product-image': 'pic'
        // };

        // oldItems.push(newItem);

        // localStorage.setItem('order', JSON.stringify(oldItems));
    }



    render() {
        return (
            <Container className="p-5">
                <Row className="m-3">
                    <Col>
                        <div style={{ fontWeight: '', fontSize: 48 }} className="d-flex">
                            <Link to='/'><div style={{ cursor: 'pointer', color: 'black' }}><i className="fas fa-caret-left mr" />  </div></Link>
                            <div className="ml-3 mr-3"> |</div> <div>Drink 喝 </div>
                        </div>
                    </Col>
                </Row>

                <Soft />
                <Fruit />
                <Milk />
                <Local />
                <MockTail />
                <CockTail />
            </Container>
        )
    }
}
