import React from 'react'
import { Container, Row, Col, List } from 'reactstrap';
import { Link } from 'react-router-dom';
import {FaPhone, FaMobile, FaEnvelope} from "react-icons/fa";

const Footer = () => {
    return (
        <div  className='footer'>
            <Container>
                <Row>
                    <Col md='4'>
                        <Link to={process.env.PUBLIC_URL+'/'} className='link-footer'><h5>ABC Power Systems</h5></Link>
                        <p>We are Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    </Col>
                    <Col md='4' xs='6'>
                        <List type='unstyled'>
                            <li><Link to={process.env.PUBLIC_URL+'/'} className='link-footer'>Home</Link></li>
                            <li><Link to={process.env.PUBLIC_URL+'/aboutus'} className='link-footer'>About Us</Link></li>
                            <li><Link to={process.env.PUBLIC_URL+'/products'} className='link-footer'>Products</Link></li>
                            <li><Link to={process.env.PUBLIC_URL+'/contact'} className='link-footer'>Contact Us</Link></li>
                        </List>
                    </Col>
                    <Col md='4' xs='6'>
                        <a className='link-footer' href="tel:+91-07922942339"> <FaPhone/> (079) 22942339</a>
                        <br/>
                        <a className='link-footer' href="tel:+91-9825029182"> <FaMobile/> +91 9825029182</a>
                        <br/>
                        <a className='link-footer' href="sarthi_abc@yahoo.com"><FaEnvelope /> sarthi_abc@yahoo.com</a> 
                    </Col>
                    
                    <Col>© Copyright 2021. ABC Power Systems. All Rights Reserved.</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;
