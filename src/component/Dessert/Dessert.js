import React, { Component } from 'react'
import { Container, Row, Col, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Form, FormGroup, Input } from 'reactstrap'
import './Dessert.css'
import { Link } from 'react-router-dom'
import CremeBrulee from './CremeBrulee';
import WarmApple from './WarmApple';
import MangoCheese from './MangoCheese';
import Combination from './Combination';
export default class Dessert extends Component {
    state = {}
    componentDidMount = () => {

    }
    render() {
        return (
            <Container className="p-5">
                <Row className="m-3"><Col>
                    <div style={{ fontWeight: '', fontSize: 48 }} className="d-flex">
                        <Link to='/'><div style={{ cursor: 'pointer', color: 'black' }}><i className="fas fa-caret-left mr" />  </div></Link>
                        <div className="ml-3 mr-3"> |</div> <div>Dessert 甜点 </div>
                    </div>
                </Col></Row>


                <CremeBrulee />
                <WarmApple />
                <MangoCheese />
                <Combination />




            </Container>
        )
    }
}
