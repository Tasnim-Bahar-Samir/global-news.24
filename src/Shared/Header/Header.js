import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { authContext } from '../../Contexts/AuthContext';


const Header = () => {
  const {user} = useContext(authContext)
  return (
    <div className='mb-3'>
   <Navbar bg="light" expand="md" className='border-bottom border-secondary'>
      <Container>
        <Navbar.Brand ><Link to='/'>Globa-News.24</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" my-2 my-lg-0 w-100"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">News</Nav.Link>
            <Nav.Link href="#action2">Blog</Nav.Link> 
            <div className='ms-auto'>
              <Nav.Link href="#action2" >{user.name}</Nav.Link>  
            </div> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header