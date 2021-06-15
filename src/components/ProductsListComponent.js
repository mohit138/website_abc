import React from 'react'
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
const ProductsList = (props) => {
    

    if(props.url === '/products'){
        return null;
    }

    const products = props.prods.map((product) => {
        return (
            <Link to={`/products/${product.id}`} className='link'>
                <ListGroupItem>{product.name}</ListGroupItem>
            </Link>
        );

    });

    return (
        <div className='products-list'>
            <h1>Our Producs</h1>
            <ListGroup>
                {products}
                
            </ListGroup>
        </div>
    )
}

export default ProductsList ;
