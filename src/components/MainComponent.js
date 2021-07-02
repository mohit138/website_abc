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
import { fetchClients, fetchProducts } from '../redux/ActionCreators';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        products: state.products,
        clients: state.clients
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchProducts : () => {dispatch(fetchProducts())},
    fetchClients : () => {dispatch(fetchClients())},
    resetFeedbackForm: () => {dispatch(actions.reset('user'))},
  
});

class Main extends Component {

    constructor(props) {
      super(props);
    //   this.state = { 
    //     prods : PRODS,
    //     clients: CLIENTS,
    //     mainColSize: 8
    //  };
    }

    componentDidMount(){
        this.props.fetchProducts();
        this.props.fetchClients();
    }

    mainColSize = 8;

    render(){

        
        if(window.location.pathname === process.env.PUBLIC_URL+'/products')
        {
            this.mainColSize = 12;
        }
        else {
            this.mainColSize = 8;
        }

        const ProductWithId = ({match}) => {
            return(
                <ProductDetails 
                    product={this.props.products.products.filter((product) => product.id ===parseInt (match.params.id,10))[0] }
                    productLoading={this.props.products.isLoading}
                    productErrMess={this.props.products.errMess}
                />
            );
        }

        const AboutUsPage = () => {
            return(
                <AboutUs 
                    clients={this.props.clients.clients} 
                    clientsLoading={this.props.clients.isLoading}
                    clientsErrMess={this.props.clients.errMess}  
                    />
            );
        }

        const ProductsPage = () => {
            return(
                <Products products={this.props.products.products}
                    productsLoading={this.props.products.isLoading}
                    productsErrMess={this.props.products.errMess}
                    />
            );
        }

        const ProductListPart = () => {
            console.log(this.props.products);
            return(
                <ProductsList url={window.location.pathname} 
                    products={this.props.products.products} 
                    productsLoading={this.props.products.isLoading}
                    productsErrMess={this.props.products.errMess}/>
            );
        }

        return(
            <div className="bg-color-2">
                <Header />
                <Container>
                    <Row>
                        <Col md={this.mainColSize}>
                            
                            <Switch>
                                <Route exact path={process.env.PUBLIC_URL+'/'} component={Home} />
                                <Route exact path={process.env.PUBLIC_URL+'/aboutus'} component={AboutUsPage} />
                                <Route exact path={process.env.PUBLIC_URL+'/products'} component={ProductsPage} />
                                <Route exact path={process.env.PUBLIC_URL+ '/contact'} component={()=> <Contact resetFeedbackForm={this.props.resetFeedbackForm}/> } />
                                <Route exact path={process.env.PUBLIC_URL+'/products/:id'} component={ProductWithId} /> 
                            </Switch>
                            {/* <Route><AboutUs /></Route> */}
                        </Col>
                        <Col md='4' className='d-none d-md-block'>
                            {/* <ProductsList url={window.location.pathname} prods={this.state.prods} /> */}
                            <Route  component={ProductListPart} />
                                
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));