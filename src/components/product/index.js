import React from 'react';
import {connect} from 'react-redux';

import {getHomeProducts} from "./action";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Link} from 'react-router-dom';
import {addProductToCartAction, updateProductToCartAction} from "../../action/addProductToCartAction";



class Product extends React.Component {
    componentDidMount() {
        this.props.getHomeProducts();
    }


    addToCart = (el) => {
        let productId = el.id;
        let cart = {};
        cart[productId] = 1;
        let productCart = {};
       for (let key in this.props.productCart) {
            productCart[key] = this.props.productCart[key];
        }
        if (Object.keys(productCart).length !== 0) {
            if (el.id in productCart) {
                for (let key in this.props.productCart) {
                    cart[key] = this.props.productCart[key];
                }
                cart[productId] += 1;
                this.props.updateProductToCartAction(cart);
            } else {
                this.props.updateProductToCartAction(Object.assign(productCart, cart));
            }
        } else {
            this.props.addProductToCartAction(cart);
        }
    };

    productForHomePage = (array) => {
        if (typeof array === "object") {
            let showHomeProduct = [];
            let randomItem = [];
            let randomProductCurrent;

            for (let i = 0; i < 4; i++) {
                randomProductCurrent = getRandomArbitary(0, array.length);
                for (let j = 0; j < randomItem.length; j++) {
                    if (randomProductCurrent === randomItem[j]) {
                        randomProductCurrent = getRandomArbitary(0, array.length);
                    }
                }
                randomItem.push(randomProductCurrent);
                showHomeProduct.push(array[randomProductCurrent]);
            }

            function getRandomArbitary(min, max) {
                return Math.floor(Math.random() * (max - min) + min);

            }
           return showHomeProduct.map((el, key) => {

                return <MuiThemeProvider key={key}>
                    <div className={'category-item'} >
                        <div className={'category-img-wrap'}><img className={'category-img'}
                                                                  src={'../../img/' + el.img} alt={''}/></div>
                        <div>
                            <div><Link to={`/products/${el.type}/${el.id}`} className={'menu'}>{el.name}</Link>
                            </div>
                            <div>{el.shortInformation}
                            </div>
                            <div>Цена: {el.price} р.</div>

                            <div><FloatingActionButton onClick={() => this.addToCart(el)}>
                                <ContentAdd/>

                            </FloatingActionButton></div>
                        </div>
                    </div>
                </MuiThemeProvider>
            });
        }
    };

    render() {


        return <MuiThemeProvider>

            <div className={'homeProduct'}>
                {this.productForHomePage(this.props.products.products)}
            </div>
        </MuiThemeProvider>;
    }
}


const mapStateToProps = (state) => ({

    products: state.loadHomeProducts,
    productCart: state.loadProductCart

});
const mapDispatchToProps = (dispatch) => ({
    addProductToCartAction: product => (dispatch(addProductToCartAction(product))),
    updateProductToCartAction: product => (dispatch(updateProductToCartAction(product))),
    getHomeProducts: () => getHomeProducts(dispatch)

});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Product);
