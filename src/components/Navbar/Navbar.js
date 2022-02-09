import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './navbar.css'


const MainNavbar = () => {
    return(
        <Navbar className='navbar'>
            <Navbar.Brand href='/'>
                <img alt='main_logo' src='/favicon-32x32.png' className='d-inline-block align-top'/>{' '}
                Kindred Innovation
            </Navbar.Brand>
            <Nav className='me-auto'>
                <Nav.Link href='/mount'>F.W.M.M</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href=''>Contact Us</Nav.Link>
            </Nav>
        </Navbar>
    )
}
export default MainNavbar