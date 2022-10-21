import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { authContext } from '../../Contexts/AuthContext'

const Login = () => {
  const [show,setShow] = useState(false);
  const [error,setError] = useState('')
  const navigate = useNavigate(); 
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const {emailSignIn} = useContext(authContext)
  const handleSignIn = (e) => {
    e.preventDefault()
    const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        emailSignIn(email,password)
        .then(result => {
          const user = result.user;
          console.log(user)
          navigate(from, {replace:true})

        })
        .catch(err => {
          console.error(err);
          setError('Invalid email or password.')
        })
  }
  return (
    <div className='container mt-5 border border-secondary rounded p-5'>
        <h2 className='text-primary mb-3'>Login!</h2>
    <Form onSubmit={handleSignIn}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required/>
        <Form.Text className="text-danger">
          {error}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type={show?'text':'password'} name='password' placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check  onClick={()=>setShow(!show)} type='checkbox' label="Show password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    </div>
  )
}

export default Login