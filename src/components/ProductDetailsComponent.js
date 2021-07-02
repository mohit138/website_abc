import React from 'react';
import { Media, Row, Col, Button } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';
import { Table } from 'reactstrap';

const ProductDetails = (props) => {

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
            console.log(props.product.features);

            if(props.product.features===null)
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
                        <FeaturesBlock/>                        
                        <h4>Specifications</h4>
                        {specifications} 
                        <Row >
                            <Col xs={{size:9, offset:3}}>
                                <Button color="primary">
                                    Click for Detailed Specifications
                                </Button>
                            </Col>
                        </Row>
                    </Media>
                </Media>
               
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
