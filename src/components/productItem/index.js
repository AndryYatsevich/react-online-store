import React from 'react';
import {Link} from 'react-router-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { addProductToCartAction, updateProductToCartAction } from '../../action/addProductToCartAction';
import {connect} from "react-redux";
import {addProductToCartItem} from '../../selectors/cartSelector';
import ReactDOM from 'react-dom';
import	{	bindActionCreators	}	from	'redux';


class ProductItem extends React.Component {
    constructor(props) {
        super(props);

    }

    addToCart = (el) => {
        let productId = el.id;
        let cart = {};
        cart[productId] = 1;
        let productCart = {};
        for (let key in this.props.productCart) {
            productCart[key] = this.props.productCart[key];
        }
        if(Object.keys(productCart).length !== 0){
                if(el.id in productCart)  {
                    for (let key in this.props.productCart) {
                        cart[key] = this.props.productCart[key];
                    }
                    cart[productId] += 1;
                    console.log('Добавляем товар, который уже есть в корзине  ', cart);
                    this.props.updateProductToCartAction(cart);
                }else {
                    this.props.updateProductToCartAction(Object.assign(productCart, cart));
                }
        }else {


            console.log('добавляем первый товар  ', cart);
            this.props.addProductToCartAction(cart);
        }
};


    render() {
        return (<MuiThemeProvider>

            <div className={'category-item'}>
                {this.props.product.map((el) => {
                    return <MuiThemeProvider key={el.id}>
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
                    </MuiThemeProvider>

                })}
            </div>
            </MuiThemeProvider>
        )
    }
}




const mapStateToProps = (state) => ({
    products: state.loadCategory,
    productCart: state.loadProductCart,

});

const mapDispatchToProps = (dispatch) => ({
    addProductToCartAction: product => (dispatch(addProductToCartAction(product))),
    updateProductToCartAction: product => (dispatch(updateProductToCartAction(product)))
    });

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
