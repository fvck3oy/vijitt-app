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

	componentDidMount() {
		document.title = "The Vijitt Resort Phuket"
	}

	render() {
		return (
			<div className="header">
				<Navbar light expand="md">
					<NavbarBrand href="/" className="ml-5"><img src="https://www.vijittresort.com/wp-content/themes/vijittresort/images/vijittresort-logo.png" alt="logo" width="100px" /></NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="" navbar>
							{/* https://www.vijittresort.com/images/vijittresort-logo.png */}
							<NavItem className="d-flex">
								<div >
									<NavLink href="/cashier/">
										<i class="fab fa-facebook-square fa-2x" />
									</NavLink>
								</div>
								<div  >
									<NavLink href="/cashier/">
										<i class="fab fa-instagram fa-2x"></i>

									</NavLink>
									<NavLink href="/cashier/">
										<i class="fab fa-youtube"></i>
									</NavLink>

								</div>
								<div  >
									<NavLink href="/cashier/" className="mr-5">
										<i class="fas fa-archive  fa-2x" /><Badge color="secondary" style={{ position: "fixed" }}>4</Badge>
									</NavLink>
								</div>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>

			</div>
		)
	}
}
