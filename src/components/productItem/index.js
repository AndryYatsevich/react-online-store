import React from 'react';
import {Link} from 'react-router-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { addProductToCartAction } from '../../action/addProductToCartAction';
import {connect} from "react-redux";
import {addProductToCartItem} from '../../selectors/cartSelector';
import ReactDOM from 'react-dom';
import	{	bindActionCreators	}	from	'redux';


class ProductItem extends React.Component {
    constructor(props) {
        super(props);

    }

    addToCart = (el) => {
        console.log('addProduct this.props: ', this.props.loadProductCart);
        if(this.props.loadProductCart.length !== 0){
            for (let i = 0; i < this.props.loadProductCart.length; i++) {
                console.log('el.id: ', el.id, 'this.props.loadProductCart[i].product.id', this.props.loadProductCart[i].product);
                if(el.id === this.props.loadProductCart[i].product.product.id)  {

                    this.props.loadProductCart[i].product.productCount = this.props.loadProductCart[i].product.productCount + 1;
                    console.log('ура нах!', this.props.loadProductCart[i].product);

                    this.props.addProductToCartAction(this.props.loadProductCart[i].product);
                } else {
                    let addedProduct = {
                        productCount: 1,
                        product: el
                    };
                    console.log(' this.state', this.state, el);
                    this.props.addProductToCartAction(addedProduct);
                }
            }
        } else {
            let addedProduct = {
                productCount: 1,
                product: el
            };
            console.log(' this.state', this.state, el);
            this.props.addProductToCartAction(addedProduct);
        }


};


    render() {
        return (
            <div className={'category-item'}>
                {this.props.product.map((el) => {
                    return <MuiThemeProvider>
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
        )
    }
}




const mapStateToProps = (state) => ({
    loadProductCart: state.loadProductCart,
    productCart: addProductToCartItem(state)

});

const mapDispatchToProps = (dispatch) => ({
      addProductToCartAction: product => (dispatch(addProductToCartAction(product)))
    });

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
