import React, { Component } from 'react'

export default class Order extends Component {
    state = {
        order: []
    }
    componentDidMount = () => {
        let order = JSON.parse(localStorage.getItem('order'));
        console.log('all order : ', order);
        this.setState({ order: order })
    }
    render() {
        return (
            <div className="p-5">
                <h1>ออเดอร์ที่สั่ง</h1>
                {this.state.order.map((e, index) =>
                    <div key={index}>{e.menu_name}  : {e.menu_value} จำนวน</div>)}
            </div>
        )
    }
}
