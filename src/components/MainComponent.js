import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './HeaderComponent';
import ProductsList from './ProductsListComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Home from './HomeComponent';
import AboutUs from './AboutUsComponent';
import Products from './ProductsComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';

class Main extends Component {

    constructor(props) {
      super(props);
  
    }

    render(){
        return(
            <div>
                <Header />
                <Container>
                    <Row>
                        <Col md='8'>
                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route exact path='/aboutus' component={AboutUs} />
                                <Route exact path='/products' component={Products} />
                                <Route exact path='/contact' component={Contact} />
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