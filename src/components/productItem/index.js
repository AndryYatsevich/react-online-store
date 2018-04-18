import React from 'react';
import {Link} from 'react-router-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { addProductToCartAction } from '../../action/addProductToCartAction';
import {connect} from "react-redux";
import {addProductToCartItem} from '../../selectors/cartSelector';
import	{	bindActionCreators	}	from	'redux';


class ProductItem extends React.Component {


    addToCart () {
        console.log(this);
        console.log('В корзину добавлен: ' + this.name + ', который стоит ' + this.price);
       addProductToCartAction(this);
}

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

                            <div><FloatingActionButton onClick={this.addToCart.bind(el)}>
                                <ContentAdd/>

                            </FloatingActionButton></div>
                        </div>
                    </MuiThemeProvider>

                })}
            </div>
        )
    }
}

//export default ProductItem;


const mapStateToProps = (state) => ({

    productCart: addProductToCartItem(state)

});

const mapDispatchToProps = (dispatch) => ({
      addProductToCartAction: bindActionCreators(addProductToCartAction,	dispatch)
    });

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
