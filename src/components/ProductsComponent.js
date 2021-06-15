import React from 'react'
import { Container, Row, Col, Media} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';



const Products = (props) => {
    
    

    const products = props.products.map((product)=>{
        console.log(product.image);
        return(
            <Col md='6' className='prod-media'>
            <Link to={`products/${product.id}`} className='link'>
            <Media >
                <Media left >
                    <Media object src='media_img.svg' alt={product.name} />
                </Media>
                <Media body>
                    <Media heading>
                    {product.name}
                    </Media>
                    {product.description}
                </Media>
            </Media>
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
        return(<h4>clientsErrMess</h4>);
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
