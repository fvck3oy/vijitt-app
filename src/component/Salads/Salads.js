import React, { Component } from 'react'
import { Container, Row, Col, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Form, FormGroup, Input } from 'reactstrap'
import './Salads.css'
import { Link } from 'react-router-dom'
import SmokedSalmon from './SmokedSalmon';
import Caesar from './Caesar';
import Greak from './Greak';
import SmokedDuck from './SmokedDuck';
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

                <SmokedSalmon />
                <Caesar />
                <Greak />
                <SmokedDuck />



            </Container>
        )
    }
}
