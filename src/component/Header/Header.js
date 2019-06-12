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
	DropdownItem
} from 'reactstrap'
import '../../App.css'

export default class HeaderComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpen: false
		}
		this.toggle = this.toggle.bind(this)
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	goto = e => {
		console.log('key : ', e)
	}

	componentDidMount(){
		document.title = "The Vijitt Resort Phuket"
	  }

	render() {
		return (
			<div>
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">The Vijitt Resort Phuket</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="/components/">Components</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		)
	}
}
