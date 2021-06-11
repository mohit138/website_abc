import React from 'react'
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
const ProductsList = ({url}) => {
    
    if(url === '/products'){
        return null;
    }

    return (
        <div className='products-list'>
            <h1>Our Producs</h1>
            <ListGroup>
                <Link to='/products/1' className='link'>
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                </Link>
                <Link to='/products/2' className='link'>
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                </Link>
                <Link to='/products/3' className='link'>
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                </Link>
                <Link to='/products/4' className='link'>
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                </Link>
                <Link to='/products/5' className='link'>
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                </Link>
                <Link to='/products/1' className='link'>
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                </Link>
                <Link to='/products/2' className='link'>
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                </Link>
                <Link to='/products/3' className='link'>
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                </Link>
                <Link to='/products/4' className='link'>
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                </Link>
                <Link to='/products/5' className='link'>
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                </Link>
            </ListGroup>
        </div>
    )
}

export default ProductsList ;
