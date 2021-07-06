import React from 'react'
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { useLocation } from "react-router-dom";
import { FadeInRightDiv } from './AnimationsComponent';

const ProductsList = (props) => {
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");


    if(props.url === process.env.PUBLIC_URL+'/products'){
        return null;
    }

    const products = props.products.map((product) => {
        // console.log(parseInt(splitLocation[2]),product.id);
        return (
            
            <Link to={process.env.PUBLIC_URL+`/products/${product.id}`} className={parseInt(splitLocation[2]) === product.id ? "active product-list-item" : " product-list-item"} >
                {/* <ListGroupItem>{product.name}</ListGroupItem> */}
                <div>{product.name}</div>
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
        return(<h4>{props.productsErrMess}</h4>);
    }
    else
    {
        return (
            <div>
            <FadeInRightDiv time="1.5s">
            <div className='products-list'>
                <h2>Our Producs</h2>
                <ListGroup className="product-list-group">
                    {products}
                    
                </ListGroup>
            </div>
            </FadeInRightDiv>
            </div>
        )
    }
    
}

export default ProductsList ;
