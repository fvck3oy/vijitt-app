import React, { Component } from 'react'
import { Container, Row, Col, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Form, FormGroup, Input } from 'reactstrap'
import './Sandwiches.css'
import { Link } from 'react-router-dom'
import the_vijitt_cheese_burger from '../../picture/sandwiches/the_vijitt_cheese_burger.jpg'
import griied_chicken_pesto_sandwiches from '../../picture/sandwiches/griied_chicken_pesto_sandwiches.jpg'
import the_vijitt_club_sandwiches from '../../picture/sandwiches/the_vijitt_club_sandwiches.jpg'
import Club from './Club';
import Cheese from './Cheese';
import Grilled from './Grilled';
export default class Sandwiches extends Component {
    render() {
        return (
            <Container className="p-5">
                <Row className="m-3"><Col>
                    <div style={{ fontWeight: '', fontSize: 48 }} className="d-flex">
                        <Link to='/'><div style={{ cursor: 'pointer', color: 'black' }}><i className="fas fa-caret-left mr" />  </div></Link>
                        <div className="ml-3 mr-3"> |</div> <div>Sandwiches 三明治 </div>
                    </div>
                </Col></Row>


                <Club />
                <Cheese />
                <Grilled />


            </Container>
        )
    }
}
