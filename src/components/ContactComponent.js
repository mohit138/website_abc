import React, {Component} from 'react'
import { Container, Row, Col } from 'reactstrap';
import {FaPhone, FaMobile, FaEnvelope, FaMapMarked} from "react-icons/fa";



const Contact = () => {
    return (
        <div>

            <Container>
                <h1 className='contact-head'>Contact Us</h1>
                <h3>Mr. Malav Parikh</h3>
                <Row>
                    <Col md='12' >
                        <a  href="https://goo.gl/maps/6sFgJZJyz52yCAeo9" className="contact-link" target="_blank">
                        <div className='contact-block' >
                            <h3><FaMapMarked /></h3>
                            <div className='content-block-div'>A/133-134, Pushp Industrial Arcade, Near Patel Mill & Shital Cinema, Rakhial Rd, near Shital Cinema, Saraspur, Ahmedabad, Gujarat 380023
                            </div>
                        </div>
                        </a>
                        
                    </Col>
                    <Col md='6' >
                        <div className='contact-block'>
                            <h3><FaPhone/></h3>
                            <div >
                                <a className='contact-link' href="tel:+91-9825029182"> +91 9825029182</a>
                                <br/>
                                <a className='contact-link' href="tel:+91-07922942339"> (079) 22942339</a>
                                <br/>
                                <a className='contact-link' href="tel:+91-07922942340"> (079) 22942340</a>
                                <br/>
                                <a className='contact-link' href="tel:+91-07932916191"> (079) 32916191</a>
                            </div>
                        </div>
                    </Col>
                    <Col md='6'>
                        <a className='contact-link' href="sarthi_abc@yahoo.com"> 
                        <div  className='contact-block'>
                            <h3><FaEnvelope /></h3>
                            <div  className='content-block-div'>sarthi_abc@yahoo.com </div>    
                        </div>
                        </a>
                    </Col>
                    <Col lg='12'>
                    
                    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.048829311161!2d72.61957891496786!3d23.02197928495333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e867d494885f3%3A0xaf2a560808bf3389!2sABC%20POWER%20SYSTEMS!5e0!3m2!1sen!2sin!4v1623740173211!5m2!1sen!2sin" width="100%" style={{border:0}} allowfullscreen="" loading="lazy" ></iframe>
                    </Col>
                </Row>

                <Row>
                    <strong>will have to add redux form here !!!!!!!!!!!!</strong>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;
