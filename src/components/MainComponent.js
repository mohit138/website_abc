import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './HeaderComponent';
import ProductsList from './ProductsListComponent';
import { Switch, Route, Redirect, withRouter, useLocation } from 'react-router-dom';
import Home from './HomeComponent';
import AboutUs from './AboutUsComponent';
import Products from './ProductsComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import { PRODS } from '../shared/products';
import { CLIENTS } from '../shared/clients';
import ProductDetails from './ProductDetailsComponent';

class Main extends Component {

    constructor(props) {
      super(props);
      this.state = { 
        prods : PRODS,
        clients: CLIENTS,
        mainColSize: 8
     };
  
    }



    render(){

        
        if(window.location.pathname === '/products')
        {
            this.state.mainColSize = 12;
        }
        else {
            this.state.mainColSize = 8;
        }

        return(
            <div>
                <Header />
                <Container>
                    <Row>
                        <Col md={this.state.mainColSize}>
                            
                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route exact path='/aboutus' component={() => <AboutUs clients={this.state.clients} />} />
                                <Route exact path='/products' component={() => <Products prods={this.state.prods}/>} />
                                <Route exact path='/contact' component={Contact} />
                                <Route exact path='/products/1' component={ProductDetails} />
                            </Switch>
                            {/* <Route><AboutUs /></Route> */}
                        </Col>
                        <Col md='4' className='d-none d-md-block'>
                            <ProductsList url={window.location.pathname} />
                            
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default withRouter((Main));