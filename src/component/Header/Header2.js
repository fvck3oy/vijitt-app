
import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge
} from 'reactstrap'
import './Header.css'
export default class Header2 extends Component {
    render() {
        return (
            <div className="header">
                <div className="d-flex" style={{ color: '#c89861' }}>
                    <div className="logo">
                        <img src="https://www.vijittresort.com/wp-content/themes/vijittresort/images/vijittresort-logo.png" alt="logo" width="200px" className="img-fluid" />
                    </div>

                    <div className="d-flex m-auto ">
                        <div className="contact">
                            <a href="https://www.facebook.com/VijittResort"><i className="fab fa-facebook-square fa-2x" /></a>
                        </div>


                        <div className="contact">
                            <a href="https://www.instagram.com/vijittresortphuket/?ref=badge"><i className="fab fa-instagram fa-2x"></i></a>
                        </div>


                        <div className="contact">
                            <a href="https://www.youtube.com/watch?v=2FmlF0UHiXU"><i className="fab fa-youtube fa-2x"></i></a>
                        </div>

                    </div>



                </div>
            </div>
        )
    }
}
