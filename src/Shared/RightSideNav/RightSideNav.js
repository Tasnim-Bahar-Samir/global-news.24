import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle,FaGithub,FaFacebook,FaTwitter,FaYoutube,FaWhatsapp } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import { authContext } from '../../Contexts/AuthContext';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {
  const {googleSingIn,user} = useContext(authContext);
  const googleProvider = new GoogleAuthProvider()
  const handleGoogleSignIn = ()=>{
    googleSingIn(googleProvider)
    .then(result =>{
      const user = result.user;
      console.log(user);

    })
    .catch(err => console.log(err))
  }
  return (
    <div>
     {
      user?.uid || 
      <ButtonGroup vertical className='w-100'>
      <Button onClick={handleGoogleSignIn} className='mb-2' variant='outline-primary'><FaGoogle/> Login with google</Button>
      <Button variant='outline-dark'><FaGithub/> Login with github</Button>
    </ButtonGroup>
     }

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