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
        console.log(el);
        let productId = el.id;
        let cart = {};
        cart[productId] = 1;
        console.log(cart);
        let productCart = this.props.loadProductCart;

        if(Object.keys(productCart).length !== 0){
                if(el.id in productCart)  {

                    productCart[productId] += 1;
                    console.log(cart, productCart);
                    this.props.updateProductToCartAction(productCart);
                }else {
                    this.props.addProductToCartAction(cart);
                }
        }else {
            this.props.addProductToCartAction(cart);
        }
};


    render() {
        return (<MuiThemeProvider>
                {console.log('this.props.product ===============================================================>',this.props.product)}
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
    loadProductCart: state.loadProductCart,
    productCart: addProductToCartItem(state)

});

const mapDispatchToProps = (dispatch) => ({
      addProductToCartAction: product => (dispatch(addProductToCartAction(product))),
    updateProductToCartAction: product => (dispatch(updateProductToCartAction(product)))
    });

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
