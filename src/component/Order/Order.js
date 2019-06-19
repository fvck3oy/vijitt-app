import React, { Component } from 'react'
import { Container, Row, Col, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Form, FormGroup, Input, Label } from 'reactstrap'
export default class Order extends Component {
    state = {
        order: [] ,username:'' , room:''
    }
    componentDidMount = () => {
        let order = JSON.parse(localStorage.getItem('order'));
        console.log('all order : ', order);
        this.setState({ order: order })
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
        this.setState({ message: '' })
        console.log({ [name]: value })
    }

    sentOrder = (e) => {
    console.log('sent to DB !')
    e.preventDefault();
    }


    render() {
        return (
            <div className="p-5">

                <div className="pb-5">
                    <h1>My Order</h1>
                    {this.state.order.map((e, index) =>
                        <div key={index}>{e.menu_name}  : {e.menu_value} จำนวน</div>)}

                </div>
                <h1>Address</h1>
                <Form onSubmit={this.sentOrder}>
                    <FormGroup>
                        Name  <Input type="text" name="username" value={this.state.username} placeholder="please fill your name" onChange={this.handleInputChange} required />
                    </FormGroup>
                    <FormGroup>
                        Room No  <Input type="text" name="room" value={this.state.room} placeholder="please fill your room" onChange={this.handleInputChange} required />
                    </FormGroup>
                    <Button color="success">Confirm Order <i className="fas fa-check"></i></Button>
                </Form>

            </div>
        )
    }
}
