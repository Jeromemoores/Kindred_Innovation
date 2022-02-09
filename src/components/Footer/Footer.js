import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'

const MainFooter = () => {
    return(
        <Navbar fixed='bottom'>
            <Container>
                <Nav />
                <Nav>
                   Copyright  &copy; 2022 Kindred Innovation
                </Nav>
                <Nav>
                    <Nav.Link href=''>Contact Us</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default MainFooter