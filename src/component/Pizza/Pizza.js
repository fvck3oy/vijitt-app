import React, { Component } from 'react'
import { Container, Row, Col, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Form, FormGroup, Input } from 'reactstrap'
import './Pizza.css'
import { Link } from 'react-router-dom'
import Hawaiian from './Hawaiian';
import BBQ from './BBQ';
import Vegetarian from './Vegetarian';
import Margherita from './Margherita';

export default class Pizza extends Component {
    render() {
        return (
            <Container className="p-5">
                <Row className="m-3"><Col>
                    <div style={{ fontWeight: '', fontSize: 48 }} className="d-flex">
                        <Link to='/'><div style={{ cursor: 'pointer', color: 'black' }}><i className="fas fa-caret-left mr" />  </div></Link>
                        <div className="ml-3 mr-3"> |</div> <div>Pizza 比萨 </div>
                    </div>
                </Col></Row>



                <Margherita />
                <Hawaiian />
                <BBQ />
                <Vegetarian />




            </Container>
        )
    }
}
