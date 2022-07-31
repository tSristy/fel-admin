import React from 'react';
import './HomeHeader.css';
import { Row, Col, Button } from 'react-bootstrap';

const HomeHeader = () => {
    return (
        <>
            <Row>
                <Col className='logo_div d-flex justify-content-center' md = {10}>
                    {/* NEED TO IMPROVE */}
                    <a href=""> 
                        <img  className ="logo_img" src="http://fel.com.bd/FEL_FILE/logo.png" alt="Fair Electronics"/>
                    </a>
                </Col>

                <Col className='smart_plaza_div d-flex justify-content-center' md = {2}>
                    <Button className='btn-smart-plaza'>SMARTPLAZA LOCATION</Button>
                </Col>
            </Row>
        </>
    );
};

export default HomeHeader;