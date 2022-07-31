import React, { useState } from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, Row, Col} from 'react-bootstrap';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';

initializeApp(firebaseConfig);

const Login = () => {
    // -------------------- LOGIN AUTH -------------------------------
    const [email, setEmail] = useState('');
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const [password, setPassword] = useState('');
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    // -------------------- LOGIN AUTH -------------------------------
    const handleLoginBtn = () => {
        
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
        
    }

    return (      
            <div className = 'loginDiv'>
                <Row>
                    <Col className = 'loginSide d-flex align-items-center justify-content-center'>
                        <div>
                            <h1>LOGIN</h1>
                            <p>to gain access inside of your system </p>
                        </div>
                    </Col>
                
                    <Col xs={12} md={6} className = 'loginForm'>    
                        <Form>
                            <br/>
                            <img src="https://fairelectronics.com.bd/pub/media/logo/Fair-Electronics_1_.png" alt="" />
                            <br/>
                            <br></br>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onBlur={handleEmailBlur}  type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                            </Form.Group>

                            <div className="d-grid gap-2">
                            <Button onClick={handleLoginBtn} variant="outline-primary " >
                                Submit
                            </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </div>
    );
};

export default Login;