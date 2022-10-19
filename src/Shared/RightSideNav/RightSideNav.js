import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle,FaGithub,FaFacebook,FaTwitter,FaYoutube,FaWhatsapp } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';


const RightSideNav = () => {
  return (
    <div>
     <ButtonGroup vertical className='w-100'>
      <Button className='mb-2' variant='outline-primary'><FaGoogle/> Login with google</Button>
      <Button variant='outline-dark'><FaGithub/> Login with github</Button>
    </ButtonGroup>

    <h5 className='mt-4'>Find us on</h5>
    <ListGroup>
      <ListGroup.Item className='mb-2'><FaFacebook/> Facebook</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaYoutube/> Youtube</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaTwitter/>Twitter</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaWhatsapp/>Whatsapp</ListGroup.Item>
      <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
    </div>
  )
}

export default RightSideNav