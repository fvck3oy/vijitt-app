
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
import { Link } from 'react-router-dom'
import './Header.css'
export default class Header3 extends Component {
    render() {
        return (
            <div className="fixed-bottom">
                <div className="d-flex justify-content-end align-items-center p-5">

                    <div className="">
                        <div className="archive">
                            <Link to='/order'><i className="fas fa-archive fa-2x" /></Link>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
