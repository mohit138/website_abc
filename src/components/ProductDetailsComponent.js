import React from 'react';
import { Media } from 'reactstrap';

const ProductDetails = () => {
    return (
        <div>
            <Media>
                <Media left href="#">
                    <Media object src="../assets/images/318x180.svg" width='100%' alt="e" />
                </Media>
                <Media body>
                    <Media heading>
                    Media heading
                    </Media>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </Media>
            </Media>
            details
        </div>
    )
}

export default ProductDetails;
