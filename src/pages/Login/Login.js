import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const { toggle, handleRegistration, error, resetPassword, handlePassChange, handleEmailChange, haldleNameChange, signInUsingGoogle, isLogin } = useAuth()
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home"
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    return (
        <div className="w-75 mx-auto p-5">
            <Form className="mt-5 w-50 mx-auto p-5" onSubmit={handleRegistration}>
                <h1 className="text-center">Please {isLogin ? 'Login' : 'Register'}</h1>
                {!isLogin && <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onBlur={haldleNameChange} type="text" placeholder="Enter your name" />
                </Form.Group>}
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassChange} type="password" placeholder="Password" required />
                </Form.Group>
                <div className="error">
                    {error}
                </div><br />
                <input onChange={toggle} type="checkbox" />
                <label htmlFor="gridCheck1">  Allready Register?</label><br />
                <Button className="mt-3 mb-3 btn btn-dark" onClick={resetPassword}>reset password</Button>
                <br /> <input type="submit" value={isLogin ? 'Login' : 'register'} className="btn btn-success reg" />
                <br /><br />
                <Button onClick={handleGoogleLogin}>SignIngoogle</Button>
            </Form>
        </div>
    );
};

export default Login;