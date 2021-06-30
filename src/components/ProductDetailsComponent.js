import React from 'react';
import { Media } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

const ProductDetails = (props) => {

    // console.log(baseUrl + props.product.image);

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
        
        return (
            <div>
                <Media>
                    <Media left href="#">
                        <Media object src={baseUrl + props.product.image} width='100%' alt="e" />
                    </Media>
                    <Media body>
                        <Media heading>
                        {props.product.name}
                        </Media>
                        {props.product.description}    
                    </Media>
                </Media>
                details
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
