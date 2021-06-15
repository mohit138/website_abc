import React from 'react'
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Loading } from './LoadingComponent';

const ProductsList = (props) => {
    

    if(props.url === '/products'){
        return null;
    }

    const products = props.products.map((product) => {
        return (
            <Link to={`/products/${product.id}`} className='link'>
                <ListGroupItem>{product.name}</ListGroupItem>
            </Link>
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
            <div className='products-list'>
                <h1>Our Producs</h1>
                <ListGroup>
                    {products}
                    
                </ListGroup>
            </div>
        )
    }
    
}

export default ProductsList ;
