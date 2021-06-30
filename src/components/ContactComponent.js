import React, {Component} from 'react'
import { Container, Row, Col, Label, Button } from 'reactstrap';
import {FaPhone, FaMobile, FaEnvelope, FaMapMarked} from "react-icons/fa";
import { Control, Form, Errors, actions } from 'react-redux-form';

const required = (val) => val && val.length ;
const maxLength = (len) => (val) => !(val) || (val.length<=len);
const minLength = (len) => (val) => (val) && (val.length>=len);
const length = (val) => (val) && (val.length === 10);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9,_%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class Contact extends Component {

    constructor (props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleSubmit(values) {
        console.log("current state is: "+ JSON.stringify(values));
        alert("current state is: "+ JSON.stringify(values));
        this.props.resetFeedbackForm();
    }

    render(){
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
                        <div>
                            <h2>Inquiry to ABC Power System</h2>
                        </div>
                        <Form model="user" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="name" lg={3}>Name*</Label>
                                <Col lg={9}>
                                    <Control.text model=".name" id="name" name="name" 
                                        placeholder="Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(2), maxLength: maxLength(10)
                                        }}
                                        />
                                    <Errors 
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                            minLength: "Must be greated than 1 characters",
                                            maxLength: 'Must be 15 characters or Less'
                                        }}
                                    />
                                </Col> 
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="companyName" lg={3}>Company Name</Label>
                                <Col lg={9}>
                                    <Control.text model=".companyName" id="companyName" name="companyName" 
                                        placeholder="Company Name"
                                        className="form-control"
                                        />
                                </Col> 
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="address" lg={3}>Address</Label>
                                <Col lg={9}>
                                    <Control.textarea model=".address" id="address" name="address" 
                                        rows='4'
                                        className="form-control"
                                    />
                                </Col> 
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="phone" lg={3}>Phone*</Label>
                                <Col lg={9}>
                                    <Control.text model=".phone" id="phone" name="phone" 
                                        placeholder="Phone No."
                                        className="form-control"
                                        validators={{
                                            required, length, isNumber
                                        }}
                                        />
                                    <Errors 
                                        className="text-danger"
                                        model=".phone"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                            length: "Incorrect Length of Mobile No.",
                                            isNumber: 'Must be Numbers'
                                        }}
                                    />
                                </Col> 
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="fax" lg={3}>Fax No.</Label>
                                <Col lg={9}>
                                    <Control.text model=".fax" id="fax" name="fax" 
                                        placeholder="Fax No."
                                        className="form-control"
                                        />
                                </Col> 
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" lg={3}>Email*</Label>
                                <Col lg={9}>
                                    <Control.text model=".email" id="email" name="email" 
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}
                                        />
                                    <Errors 
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                            validEmail: "Invalid Email"
                                        }}
                                    />
                                </Col> 
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="website" lg={3}>Website</Label>
                                <Col lg={9}>
                                    <Control.text model=".website" id="website" name="website" 
                                        placeholder="Website"
                                        className="form-control"
                                        />
                                </Col> 
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" lg={3}>Comment*</Label>
                                <Col lg={9}>
                                    <Control.textarea model=".comment" id="comment" name="comment" 
                                        rows='6'
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors 
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                        }}
                                    />
                                </Col> 
                            </Row>
                            <Row className="form-group">
                                <Col lg={{size:9, offset:3}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                            
                        </Form>
                        {/* <strong>will have to add redux form here !!!!!!!!!!!!</strong> */}
                    </Row>
                </Container>
            </div>
        )
    }

}

export default Contact;
