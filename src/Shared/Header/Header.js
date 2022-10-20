import React, { useContext } from 'react'
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { authContext } from '../../Contexts/AuthContext';
import {FaUserAlt} from 'react-icons/fa'


const Header = () => {
  const {user} = useContext(authContext)
  console.log(user)
  return (
    <div className='mb-3'>
   <Navbar bg="light" expand="md" className='border-bottom border-secondary'>
      <Container>
        <Navbar.Brand ><Link to='/'>Global-News.24</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" my-2 my-lg-0 w-100"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">News</Nav.Link>
            <Nav.Link href="#action2">Blog</Nav.Link> 
            <div className='ms-auto d-flex'>
              <Nav.Link href='#action3'>
              {
                user?.photoURL? <Image style={{height:'20px'}} roundedCircle src={user.photoURL}></Image>
                :
                <FaUserAlt/>
              }
              </Nav.Link>
              <Nav.Link href="#action4" >{user?.displayName}</Nav.Link>  
            </div> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header