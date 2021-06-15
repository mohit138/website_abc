import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Loading } from './LoadingComponent';
// import icici_logo from '../../public/assets/images/icici-lombard.svg'; 
// import ambica_logo from '../../public/assets/images/ambica-logo.png';
// import gmdc_logo from '../../public/assets/images/gmdc-logo.jpg'; 
// import civil_logo from '../../public/assets/images/civil-hsptl.png';
// import iima_logo from '../../public/assets/images/iima-logo.png';
// import nirma_logo from '../../public/assets/images/Nirma-Uni-Logo.jpg';
// import sintex_logo from '../../public/assets/images/sintex-plastic.png';
// import cushah_logo from '../../public/assets/images/cu-shah.jpg';


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
        return(<h4>clientsErrMess</h4>);
    }
    else
    {
      return (
          <div>
              <h1>About Us</h1>
              <div className="about">
              <img src='assets/images/318x180.svg' className="about-img" height="200" width="340" alt="ABC Power" />
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

                  {clients}
                  
                  </Carousel>

          </div>
      )
    }
}

export default AboutUs;
