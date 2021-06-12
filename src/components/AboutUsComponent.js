import React from 'react'
import logo from "../images/318x180.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import icici_logo from '../images/icici-lombard.svg'; 
import ambica_logo from '../images/ambica-logo.png';
import gmdc_logo from '../images/gmdc-logo.jpg'; 
import civil_logo from '../images/civil-hsptl.png';
import iima_logo from '../images/iima-logo.png';
import nirma_logo from '../images/Nirma-Uni-Logo.jpg';
import sintex_logo from '../images/sintex-plastic.png';
import cushah_logo from '../images/cu-shah.jpg';


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


const AboutUs = () => {
    return (
        <div>
            <h1>About Us</h1>
            <div className="about">
            <img src={logo} className="about-img" height="200" width="340" alt="ABC Power" />
            <p className="about-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et varius erat, at aliquet elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare dui quis urna volutpat, eget sodales odio tempor. Praesent luctus fringilla mauris, id porttitor mi tincidunt nec. Duis ac lacus id nisi egestas vehicula nec in enim. Nulla nisl quam, viverra non egestas a, vulputate a ante. Nullam aliquet orci vitae imperdiet facilisis. Pellentesque semper porttitor porttitor. Vestibulum cursus neque nec consectetur malesuada. Duis et egestas risus. Vestibulum sodales risus at tincidunt ornare. Integer nunc justo, ultricies sagittis suscipit dignissim, posuere at ante. Integer consectetur odio urna, et varius libero faucibus quis.
                Vivamus ut odio lobortis, rhoncus magna ut, ullamcorper turpis. Aliquam fermentum, tortor sed faucibus gravida, urna enim porta nisl, sed ornare orci urna non velit. Nunc accumsan porttitor sollicitudin. Sed quis accumsan nisi. Suspendisse iaculis purus sed ligula mattis, vel dictum massa varius. Vestibulum accumsan viverra massa, sed lobortis sem tincidunt sed. Sed purus tortor, sagittis id imperdiet in, sollicitudin eu mi. Etiam augue sem, feugiat id ante in, lobortis tristique tortor. Ut egestas posuere mollis. Cras neque turpis, volutpat et lorem et, lacinia condimentum tortor. Cras nec auctor eros. Curabitur ut diam libero. Donec tellus leo, accumsan nec tortor in, ultricies finibus quam.
            </p>
            </div>

            <h3>Our Clients</h3>
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
                <div><img src={civil_logo} height='100px'/></div>
                <div><img src={iima_logo} height='100px'/></div>
                <div><img src={nirma_logo} width='180px'/></div>
                <div><img src={sintex_logo} width='200px'/></div>
                <div><img src={icici_logo} width='200px'/></div>
                <div><img src={cushah_logo} height='100px'/></div>
                <div><img src={ambica_logo} width='200px'/></div>
                <div><img src={gmdc_logo} height='100px'/></div>
                
                </Carousel>

        </div>
    )
}

export default AboutUs;
