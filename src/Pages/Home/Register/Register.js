import React, { useContext } from 'react'
import { Button, Form } from 'react-bootstrap';
import { authContext } from '../../../Contexts/AuthContext';

const Register = () => {
    const {emailSignUp} = useContext(authContext)
    const handleRegister = (e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)
        emailSignUp(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
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
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
    </div>
  )
}

export default Register;