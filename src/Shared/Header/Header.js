import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='mb-3'>
   <Navbar bg="light" expand="md" className='border-bottom border-secondary'>
      <Container>
        <Navbar.Brand ><Link to='/'>Globa-News.24</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" my-2 my-lg-0 ms-auto w"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">News</Nav.Link>
            <Nav.Link href="#action2">Blog</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header