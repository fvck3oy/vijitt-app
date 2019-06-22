import React, { Component } from 'react'
import { Container, Row, Col, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle ,Form , FormGroup , Input } from 'reactstrap'
import './Pasta.css'
import { Link } from 'react-router-dom'
import Beef from './Beef';
import Spaghetti from './Spaghetti';
export default class Pasta extends Component {
    render() {
        return (
            <Container className="p-5">
            <Row className="m-3"><Col>
            <div style={{ fontWeight: '', fontSize: 48 }} className="d-flex">
                        <Link to='/'><div style={{ cursor: 'pointer' , color:'black'}}><i className="fas fa-caret-left mr" />  </div></Link>
                        <div className="ml-3 mr-3"> |</div> <div>Pasta 意大利面条 </div>
                    </div></Col></Row>
          

            <Beef/>
            <Spaghetti/>
        </Container>
        )
    }
}
