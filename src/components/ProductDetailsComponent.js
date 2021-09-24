import React, {useState} from 'react';
import { Media, Row, Col, Button, Container  } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';
import { Table } from 'reactstrap';
// import { Carousel } from 'react-multi-carousel';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';





const ProductDetails = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    if(props.product!=null)
    {   
        // console.log(props.product.specifications);

        // const specification = props.product.specifications.map((spec)=>{
        //     console.log(spec.spec_detail[0]);

        //     return (
        //         <div>
        //             {spec.spec_name}
        //             :
        //             {spec.spec_detail[0]}
        //         </div>
        //     );
        // });
    }

    if(props.productsLoading)
    {
        return(
          <Loading />
        );
    }
    else if(props.productsErrMess)
    {
        return(<h4>{props.productsErrMess}</h4>);
    }
    else if(props.product!=null)
    {
        const specifications = props.product.specifications.map((spec)=>{
            // console.log(spec);

            const details = spec.spec_detail.map((detail)=>{
                // console.log(detail);
                return(
                    <span>
                        {' | '}
                        {detail}
                    </span>
                                       
                );
            });

            return (
                <Row>
                    <Col xs={3}>
                    <h6 >{spec.spec_name}</h6>        
                   
                    </Col>
                    <Col xs={9}>
                        {details}
                    </Col>
                    <hr />
                </Row>

                // <div className="table-spec">
                //     <span className="table-title">
                //         <span className="table-cell-main">{spec.spec_name}</span>
                //         {details}
                //     </span>
                    
                //     {/* <span className="table-body"></span> */}
                // </div>
                
            );
        });

        

        const FeaturesBlock = () => {
            // console.log(props.product.features.length);

            if(props.product.features.length===0)
            {    return(
                    <span></span>
                );
            }
            else 
            {
                const features = props.product.features.map((feature)=>{
                    return(
                        <li>
                            {feature}    
                        </li>
                    );
                });
                return(
                    <div>
                        <h4>Features</h4>
                        <ul>
                        {features}
                        </ul>
                    </div>
                );
            }
        }

        const next = () => {
            if (animating) return;
            const nextIndex = activeIndex === props.product.image.length - 1 ? 0 : activeIndex + 1;
            setActiveIndex(nextIndex);
        }

        const previous = () => {
            if (animating) return;
            const nextIndex = activeIndex === 0 ? props.product.image.length - 1 : activeIndex - 1;
            setActiveIndex(nextIndex);
        }
        const slides = props.product.image.map((img) => {
            return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={img}
            >
                <img className="product-detail-image" src={baseUrl + img} alt={img} />
            </CarouselItem>
            );
          });

        return (
            <div>
                <Container>
                <Media>
                    <Media className="product-detail-img-wrapper">
                        <Carousel
                            activeIndex={activeIndex}
                            next={next}
                            previous={previous}
                            >
                            {slides}
                            {/* <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={next} /> */}
                        </Carousel>
                        {/* <Media className="product-detail-image" object src={baseUrl + props.product.image[0]} alt="e" /> */}
                    </Media>
                    <Media body>
                        <Media heading>
                        {props.product.name}
                        </Media>
                        {props.product.description}
                        <FeaturesBlock/>                        
                        <h4>Specifications</h4>
                        {specifications} 
                        <Row >
                            <Col xs={{size:9, offset:3}}>
                            <a href={baseUrl + "assets/Catalogue.pdf"} download>
                                <Button color="primary">
                                    Click for Detailed Specifications
                                </Button>
                            </a>
                            </Col>
                        </Row>
                    </Media>
                </Media>
                </Container>
            </div>
        );
    }
    else{
        return(
            <div></div>
        );
    }
}

export default ProductDetails;
