import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Loading } from './LoadingComponent';
import { Container } from 'reactstrap';
// import icici_logo from '../../public/assets/images/icici-lombard.svg'; 
// import ambica_logo from '../../public/assets/images/ambica-logo.png';
// import gmdc_logo from '../../public/assets/images/gmdc-logo.jpg'; 
// import civil_logo from '../../public/assets/images/civil-hsptl.png';
// import iima_logo from '../../public/assets/images/iima-logo.png';
// import nirma_logo from '../../public/assets/images/Nirma-Uni-Logo.jpg';
// import sintex_logo from '../../public/assets/images/sintex-plastic.png';
// import cushah_logo from '../../public/assets/images/cu-shah.jpg';
import { FadeInDiv } from './AnimationsComponent';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


const AboutUs = (props) => {

    const clients = props.clients.map((client)=>{
      console.log(client);
        if(client.width){
          return(<div><img src={client.image} width='190px'/></div>);
        }
        else{
          return(<div><img src={client.image} height='100px'/></div>);
        }
    });

    if(props.clientsLoading)
    {
        return(
          <Loading />
        );
    }
    else if(props.clientsErrMess)
    {
        return(<h4>{props.clientsErrMess}</h4>);
    }
    else
    {
      return (
        <Container>
          <FadeInDiv time="2s">
              <h1 className="about-heading">About Us</h1>
              <div className="about">
              <div className="about-img" >
                <img src='assets/images/stock/about.jpg' alt="ABC Power" />
              </div>
              <div className="about-content">
              We are a group of experts in the field of Power Products, and we have been providing Power Solutions to our varied Customer Base since 1995.
              Our values drive us to strive for excellence, which enables us to continuously improve business processes, products and services. 
              <br/><br/>
              We offer an extensive range of products including Online UPS, Offline UPS, Stabilizers, Transformers and Correctors; 
              enabling us to accommodate all the needs of our customers up to their satisfaction.
              <br/><br/>
              Our trained and dedicated Technical Team consists of experts in the field. Combine that with our years of experience, and the result is an extraordinary experience for our customers.

              We cater for the need of end-users as well as dealers.
              </div>
              </div>

              <h3 className="about-heading">Our Values </h3>
              <div className="about-values">
                Assurance of Unparallel Quality Products
                <hr style={{width:'20%',margin: '1rem auto'}}/>
                Utmost value of Commitments
                 <hr style={{width:'20%',margin: '1rem auto'}}/>
                Celerity in Product Delivery
                 <hr style={{width:'20%',margin: '1rem auto'}}/>
                Remarkable After Sales Services
                 <hr style={{width:'20%',margin: '1rem auto'}}/>
                Respect to all Customers and Employes
                 <hr style={{width:'20%',margin: '1rem auto'}}/>
                Punctuality
              </div>

              <h3 className="about-heading">Our Clients</h3>
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
                  // removeArrowOnDeviceType={["tablet", "mobile"]}
                  // deviceType={this.props.deviceType}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                  className="carousel"
                  >

                  {clients}
                  
                  </Carousel>

          </FadeInDiv>
        </Container>
      )
    }
}

export default AboutUs;
