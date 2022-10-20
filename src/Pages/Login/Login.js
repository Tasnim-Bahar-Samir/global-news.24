import React, { useContext } from 'react'
import { Button, Form } from 'react-bootstrap'
import { authContext } from '../../Contexts/AuthContext'

const Login = () => {
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
        })
        .catch(err => console.error(err))
  }
  return (
    <div className='container mt-5 border border-secondary rounded p-5'>
        <h2 className='text-primary mb-3'>Login!</h2>
    <Form onSubmit={handleSignIn}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    </div>
  )
}

export default Login