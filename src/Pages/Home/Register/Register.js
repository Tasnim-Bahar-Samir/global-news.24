import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authContext } from '../../../Contexts/AuthContext';

const Register = () => {
    const {emailSignUp,userProfileUpdate} = useContext
    (authContext)
    const [accept,setAccept] = useState(false);
    const handleRegister = (e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)
        emailSignUp(email,password)
        .then(() => {
            handleProfileUpdate(name)  
        })
        .catch(e => console.error(e))
    }
    const handleProfileUpdate = (name) =>{
      const profile = {displayName:name};
      userProfileUpdate(profile)
      .then(() =>{}) 
      .catch(e => console.error(e))
    }
  return (
    <div className='container mt-5 border border-secondary rounded p-5'>
    <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" 
          onClick={()=>setAccept(!accept)}
          label={<>Accept all <Link to='/terms'>terms and conditions.</Link></>} />
      </Form.Group>
      <Button disabled={!accept} variant="primary" type="submit">
        Register
      </Button>
    </Form>
    </div>
  )
}

export default Register;