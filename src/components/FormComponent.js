import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Container, Row, Col, Label, Button, Modal } from 'reactstrap';

export const FormComponent = () => {
    const form = useRef();
    const [sent, setSent] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const sendEmail = (e) => {
        e.preventDefault();

        // !!!!!!!!!!!!!!!!!!!!!!!!!uncomment when want to test !!!!!!!!!!!!!!!!!!!!!!!!!
        // emailjs.sendForm('service_633dsaz', 'template_em4kujb', e.target, 'user_UTh8h1DhDV9UZYWfn6a0Y')
        //     .then((result) => {
        //         console.log(result.text);
        //         setSent(true);
        //         alert('Your Form has been Submitted. Thank You for reaching us.');
        //     }, (error) => {
        //         console.log(error.text);
        //     });

        emailjs.sendForm('service_633dsaz', 'template_em4kujb', e.target, 'user_UTh8h1DhDV9UZYWfn6a0Y')
            .then((result) => {
                console.log(result.text);
                setSent(true);
                // alert('Your Form has been Submitted. Thank You for reaching us.');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            {!sent &&
                <form ref={form} onSubmit={sendEmail} className='form-group'>
                    <Row>
                        <Col lg={3}>
                            <label className='form-label'>Name*</label>
                        </Col>
                        <Col lg={9}>
                            <input className='form-input' type="text" name="name" placeholder='Name' required />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3}>
                            <label className='form-label'>Email*</label>
                        </Col>
                        <Col lg={9}>
                            <input className='form-input' type="email" name="email" placeholder='Email' required />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3}>
                            <label className='form-label'>Company Name</label>
                        </Col>
                        <Col lg={9}>
                            <input className='form-input' type="text" name="companyName" placeholder='Company Name' />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3}>
                            <label className='form-label'>Address</label>
                        </Col>
                        <Col lg={9}>
                            <textarea className='form-input' rows='4' name="address" placeholder='Address' />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3}>
                            <label className='form-label'>Phone No.</label>
                        </Col>
                        <Col lg={9}>
                            <input className='form-input' type="number" name="phone" placeholder='Phone No.' />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3}>
                            <label className='form-label'>Fax No.</label>
                        </Col>
                        <Col lg={9}>
                            <input className='form-input' type="text" name="fax" placeholder='Fax No.' />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3}>
                            <label className='form-label'>Website</label>
                        </Col>
                        <Col lg={9}>
                            <input className='form-input' type="text" name="website" placeholder='Website' />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3}>
                            <label className='form-label'>Comment*</label>
                        </Col>
                        <Col lg={9}>
                            <textarea className='form-input' rows='6' name="comment" placeholder='Comment' required />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{ size: 9, offset: 3 }}>
                            <Button className="button-custom" type="submit" onClick={handleShow} color="primary">
                                Send Feedback
                            </Button>
                        </Col>
                    </Row>
                </form>
            }

            {sent && 
                <h4 style={{ padding: '1rem' }}>Thank You for Submiting your Response! We will soon reach back to you.</h4>
            }

            {/* <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal> */}
        </>



    );
};