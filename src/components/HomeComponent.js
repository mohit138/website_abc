import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, 
  Col, Container, Row
} from 'reactstrap';
import img1 from '../images/318x180.svg';

const Home = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
          <Link to='/aboutus' className='link'>
            <Card>
              <CardImg top width="100%" src={img1} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">About Us</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </CardBody>
            </Card>
          </Link>
          </Col>
        </Row>
        <Row>
          <Col md='6'>
            <Link to='/products' className='link'>
              <Card>
                <CardImg top width="100%" src={img1} alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5">Our Products</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
              </Card>
            </Link>
          </Col>
          <Col md='6'>
            <Link to='/contact' className='link'>
              <Card>
                <CardImg top width="100%" src={img1} alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5">Contact Us</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;