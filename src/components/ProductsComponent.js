import React, { useEffect } from 'react'
import { Container, Row, Col, Media} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Products = (props) => {
    
    useEffect(()=>{
        Aos.init({duration: 2000});
      },[])
    

    const products = props.products.map((product)=>{
        console.log(product.image);
        return(
            // <Col md='6' className='prod-media'>
            //     <div  className="bg-color-3 prod-media-tile">
            //     <Link to={process.env.PUBLIC_URL+`/products/${product.id}`} className='link '>
            //     <Media>
            //         <Media left >
            //             <Media object src='media_img.svg' alt={product.name} />
            //         </Media>
            //         <Media body>
            //             <Media heading>
            //             {product.name}
            //             </Media>
            //             {product.description}
            //         </Media>
            //     </Media>
            //     </Link>
            //     </div>
                
            // </Col>
            <Col lg='6' >
                <Link to={process.env.PUBLIC_URL+`/products/${product.id}`} className='link'>
                <div className="product-container-head" data-aos="fade-right" data-aos-duration="1500" data-aos-delay={product.id * 55} data-aos-offset={150 - 10*product.id} data-aos-once="true">
                <div className="product-container">
                    <div className="product-img-container">
                        <div className="product-img-wrapper">
                            <img className="product-img" src={baseUrl + product.small_image[0]}   alt={product.name}></img>
                        </div>
                    </div>
                    <div className="product-content-container">
                        <h3 className="product-heading">{product.name}</h3>
                        <div className="product-description">{product.description}</div>
                        
                    </div>
                {/* <Row>
                    <Col xs="3">
                        <div className="product-img-container">
                        <div className="product-img-wrapper">
                            <img className="product-img" src='media_img.svg' width="150px" height="150px" alt={product.name}></img>
                        </div>
                        </div>
                    </Col>
                    <Col xs="9">
                        <h5 className="product-heading">{product.name}</h5>
                        <div className="product-description">{product.description}</div>
                    </Col>
                
                </Row> */}
                
                </div>
                </div>
                </Link>
            </Col>
        );
    });


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
    else
    {
        return (
            <div>
                <Container>
                    <Row>
                        {products}
                    </Row>
                </Container>
            </div>
        );
    }
    
}

export default Products
