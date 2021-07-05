import React, { useEffect } from 'react';
import Carousel from "react-multi-carousel";
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, 
  Col, Container, Row
} from 'reactstrap';
// import img1 from '../../public/assets/images/318x180.svg';
import { FadeInLeftDiv, FadeInRightDiv } from './AnimationsComponent';
import Aos from 'aos';
import 'aos/dist/aos.css';


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
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[])
  return (
    <div>
      <Container>
        <Row>
          <Col>
          {/* <Link to={process.env.PUBLIC_URL+'/aboutus'} className='link'> */}
            {/* <Card>
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
            </Card> */}
            <FadeInLeftDiv time="2s">
            <Carousel
                  swipeable={false}
                  draggable={false}
                  showDots={false}
                  responsive={responsive}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlay= {true}//{this.props.deviceType !== "mobile" ? true : false}
                  autoPlaySpeed={2500}
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
                <div className="image image-colorize"><img src='assets/images/318x180.svg' width='100%'/></div>
                <div className="image image-colorize"><img src='assets/images/318x180.svg' width='100%'/></div>
                <div className="image image-colorize"><img src='assets/images/318x180.svg' width='100%'/></div>
                <div className="image image-colorize"><img src='assets/images/318x180.svg' width='100%'/></div>
            </Carousel>
            </FadeInLeftDiv>
            <FadeInLeftDiv time="2.5s">
              <h5 className="home-card-heading">About Us</h5>
            </FadeInLeftDiv>
            <FadeInLeftDiv time="3s">
              <div className="home-card-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et varius erat, at aliquet elit. Lorem ipsum dolor sit amet, consectetur
                <div>
                  <Link to={process.env.PUBLIC_URL+'/aboutus'} className='home-card-link'>Know More</Link>
                </div>
              </div>
            </FadeInLeftDiv>
            
            
          {/* </Link> */}
          <hr/>
          </Col>
        </Row>
        <Row>
          <Col data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300" md='6'>
            {/* <Link to={process.env.PUBLIC_URL+'/products'} className='link'> */}
              <div className="image image-colorize"><img src='assets/images/318x180.svg' width='100%'/></div>
                <h5 className="home-card-heading">Products</h5>
              <div className="home-card-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et varius erat, at aliquet elit. Lorem ipsum dolor sit amet, consectetur
                <div>
                  <Link to={process.env.PUBLIC_URL+'/products'} className='home-card-link'>Know More</Link>
                </div>
              </div>
              {/* <Card>
                <CardImg top width="100%" src='assets/images/318x180.svg' alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5">Our Products</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
              </Card> */}
            {/* </Link> */}
          </Col>
          <Col data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300" md='6'>
            <div className="image image-colorize"><img src='assets/images/318x180.svg' width='100%'/></div>
              <h5 className="home-card-heading">Contact US</h5>
            <div className="home-card-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et varius erat, at aliquet elit. Lorem ipsum dolor sit amet, consectetur
              <div>
                <Link to={process.env.PUBLIC_URL+'/contact'} className='home-card-link'>Know More</Link>
              </div>
            </div>
            {/* <Link to={process.env.PUBLIC_URL+'/contact'} className='link'>
              <Card>
                <CardImg top width="100%" src='assets/images/318x180.svg' alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5">Contact Us</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
              </Card>
            </Link> */}

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;