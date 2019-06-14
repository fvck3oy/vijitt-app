
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
            <div className="fixed-top">
                <div className="d-flex justify-content-center align-items-center p-5" style={{ color: '#c89861' }}>
                    <div className="">
                        <img src="https://www.vijittresort.com/images/vijittresort-logo.png" alt="logo" width="200px" className="img-fluid" />
                    </div>

                    <div className="d-flex m-auto ">
                        <div className="contact">
                            <i class="fab fa-facebook-square fa-2x" />
                        </div>
                        <div className="contact">
                            <i class="fab fa-instagram fa-2x"></i>
                        </div>
                        <div className="contact">
                            <i class="fab fa-youtube fa-2x"></i>
                        </div>
                    </div>

                    <div className="">
                        <div className="contact">
                            <i class="fas fa-archive  fa-2x" ></i>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
