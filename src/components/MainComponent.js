import React, { Component, useState } from 'react';
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
import  Navbar  from './NavbarComponent/index';
import Sidebar from './SidebarComponent/index';

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
      this.state = { 
        // prods : PRODS,
        // clients: CLIENTS,
        // mainColSize: 8
        open: 0,
        // to make rerender on every screen size change, but seemed to increase further design complexity, hence commented
        // width: window.innerWidth
     };
     this.setOpen= this.setOpen.bind(this);
    }

    // also for re-rendering on screen size change
    // handleResize = () => {
    //     this.setState({width:window.innerWidth});
    //     if(this.state.width >= 992){
    //         this.setState({open:false});
    //     }

    // }

    setOpen(opn){
        console.log(!opn);
        console.log(opn);
        this.setState({open : !opn})
    }

    componentDidMount(){
        this.props.fetchProducts();
        this.props.fetchClients();
        // window.addEventListener("resize",this.handleResize);
    }

    componentWillUnmount() {
        // window.addEventListener("resize", this.handleResize);
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

        const HomeComponent = () => {
            return(
                <Home products={this.props.products.products}
                productsLoading={this.props.products.isLoading}
                productsErrMess={this.props.products.errMess}
                />
            );
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
                <Sidebar open={this.state.open} setOpen={this.setOpen}/>
                <Navbar open={this.state.open} setOpen={this.setOpen} />
                
                {/* <Header /> */}
                <Switch>
                    <Route exact path={process.env.PUBLIC_URL+'/'} component={HomeComponent} />
                    <Route exact path={process.env.PUBLIC_URL+'/aboutus'} component={AboutUsPage} />
                    <Route exact path={process.env.PUBLIC_URL+'/products'} component={ProductsPage} />
                    <Route exact path={process.env.PUBLIC_URL+ '/contact'} component={()=> <Contact resetFeedbackForm={this.props.resetFeedbackForm}/> } />
                    <Route exact path={process.env.PUBLIC_URL+'/products/:id'} component={ProductWithId} /> 
                </Switch>
                
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));