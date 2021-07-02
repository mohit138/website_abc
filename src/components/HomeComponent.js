import React from 'react';
import Carousel from "react-multi-carousel";
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, 
  Col, Container, Row
} from 'reactstrap';
// import img1 from '../../public/assets/images/318x180.svg';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Home = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
          <Link to={process.env.PUBLIC_URL+'/aboutus'} className='link'>
            <Card>
              {/* <CardImg top width="100%" src='assets/images/318x180.svg' alt="Card image cap" /> */}
              <Carousel
                  swipeable={false}
                  draggable={false}
                  showDots={false}
                  responsive={responsive}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlay= {true}//{this.props.deviceType !== "mobile" ? true : false}
                  autoPlaySpeed={1500}
                  keyBoardControl={true}
                  customTransition="all .5s"
                  transitionDuration={500}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
                  // deviceType={this.props.deviceType}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                  className="carousel-home"
                  >
                    <div><img src='assets/images/318x180.svg' width='100%'/></div>
                    <div><img src='assets/images/318x180.svg' width='100%'/></div>
                    <div><img src='assets/images/318x180.svg' width='100%'/></div>
                    <div><img src='assets/images/318x180.svg' width='100%'/></div>
                  </Carousel>
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
            <Link to={process.env.PUBLIC_URL+'/products'} className='link'>
              <Card>
                <CardImg top width="100%" src='assets/images/318x180.svg' alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5">Our Products</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
              </Card>
            </Link>
          </Col>
          <Col md='6'>
            <Link to={process.env.PUBLIC_URL+'/contact'} className='link'>
              <Card>
                <CardImg top width="100%" src='assets/images/318x180.svg' alt="Card image cap" />
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