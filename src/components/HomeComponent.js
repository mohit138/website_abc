import React, { useEffect } from 'react';
import Carousel from "react-multi-carousel";
import { Parallax, Background } from 'react-parallax';
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


  const products = props.products.map((product)=>{
    console.log(product.image);
    return(
        <div className='home-product'>
          <Link to={process.env.PUBLIC_URL+`/products/${product.id}`} className='home-product-link'>
          <div className='home-product-image'>
            <img width='100%' src={product.image[0]}></img>
          </div>
          <div className='home-product-content'>
            <div className='home-product-heading'>{product.name}</div>
            <div className='home-product-description'>{product.description}</div>
            <div className="home-product-more">
              <Link to={process.env.PUBLIC_URL+'/products'}  className='home-card-link'>View More Products</Link>
            </div>
          </div>
          </Link>
        </div>
    );
});

  return (
    <div>
      <div className="home-hero-parallax">
      <Parallax strength={500}>
      <Background className="custom-bg">
            <img src='assets/images/stock/hero.jpg' alt="hero-img" />
      </Background>
      <div className='hero-container'>
      <div className='hero-heading'>
          <div>We Are Here To Facilitate Uninterrupted Productivity</div>
      </div>
      </div>
      </Parallax>
      </div>
      <div className="home-hero-parallax-mobile">
      <Parallax strength={600}>
      <Background className="custom-bg">
            <img src='assets/images/stock/hero-mobile.jpg' alt="hero-img" />
      </Background>
      <div className='hero-container'>
      <div className='hero-heading'>
          <div>We Are Here To Facilitate Uninterrupted Productivity</div>
      </div>
      </div>
      </Parallax>
      </div>
        
      {/* <div className='hero-container'>
        
        <div className='hero-image'>
          <img width='100%' src='assets/images/stock/hero.jpg'></img>
        </div>

        <div className='hero-heading'>
          <div>We Are Here To Facilitate Uninterrup Productivity</div>
        </div>
      </div> */}

      <div className='home-product-container'>
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
                  // removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
                  // deviceType={this.props.deviceType}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                  className="carousel-home"
              >
                {products}
            </Carousel>
      </div>

      {/* <Parallax strength={600}>
        <Background>
          <img src='assets/images/stock/home-about-cut.png' alt="home-about-img" />
        </Background>
        <div className='home-about-container'>
          <div className="home-about-content">
          We are a group of experts in the field of Power Products, 
          and we have been providing Power Solutions to our 
          varied Customer Base since 1995.
          We cater the need of end users as well as dealers
          </div>
          <div className='home-about-know-more'>
            <Link to={process.env.PUBLIC_URL+'/aboutus'} className='home-card-link'>Know More</Link>
          </div>
        </div>
      </Parallax> */}
      <div className='home-about-container'>
        <div className="home-about-image">
          <img className='window-home-about-img' width='100%' src='assets/images/stock/home-about-cut.png'></img>
          <img className='mobile-home-about-img' width='100%' src='assets/images/stock/home-about-mobile.jpg'></img>
        </div>
        <div className="home-about-content">
        We are a group of experts in the field of Power Products, 
        and we have been providing Power Solutions to our 
        varied Customer Base since 1995.
        We cater the need of end users as well as dealers
        </div>
        <div className='home-about-know-more'>
          <Link to={process.env.PUBLIC_URL+'/aboutus'} className='home-card-link'>Know More</Link>
        </div>
      </div>
      {/* <Container>
        <Row>
          <Col>
          
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
            
          <hr/>
          </Col>
        </Row>
        <Row style={{"overflow-x":"hidden"}}>
          <Col data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300" md='6' data-aos-offset="160">
              <div className="image image-colorize"><img src='assets/images/318x180.svg' width='100%'/></div>
                <h5 className="home-card-heading">Products</h5>
              <div className="home-card-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et varius erat, at aliquet elit. Lorem ipsum dolor sit amet, consectetur
                <div>
                  <Link to={process.env.PUBLIC_URL+'/products'} className='home-card-link'>Know More</Link>
                </div>
              </div>
              
          </Col>
          <Col data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300" md='6' data-aos-offset="160">
            <div className="image image-colorize"><img src='assets/images/318x180.svg' width='100%'/></div>
              <h5 className="home-card-heading">Contact US</h5>
            <div className="home-card-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et varius erat, at aliquet elit. Lorem ipsum dolor sit amet, consectetur
              <div>
                <Link to={process.env.PUBLIC_URL+'/contact'} className='home-card-link'>Know More</Link>
              </div>
            </div>
            

          </Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default Home;