import React from 'react';
import banner from '../../img/0Jrvgf38V8.jpg';
import {connect} from 'react-redux';
import {getProductsItem} from '../../selectors/homeProductsSelectors';
import {loadHomeProducts} from "../../action/homeProductsAction";

class Product extends React.Component {
    componentDidMount() {
        this.props.loadHomeProducts();
    }

    render() {
        return (
            <div className={'products-list'}>
                {
                    this.props.products.map(function (el) {
                        return <div className={'product'}>
                            <div className={'product-img'}>
                                <img src={banner} alt={'product'} className={'product-img'}/>
                            </div>
                            <div className={'product-info'}>
                                <div className={'product-title'}><a href={'#'}><h1>{el.name}</h1></a>
                                </div>
                                <div className={'product-description'}>{el.description}
                                </div>
                                <div className={'product-price-wrap'}>
                                    <div className={'product-price'}><h3>${el.price}</h3></div>

                                </div>
                                <div className={'product-btn-add-wrap'}>
                                    <a href={'#'} className={'product-btn-add'}>Add to cart</a>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        );
    }
}


const mapStateToProps = (state) =>({

    products: getProductsItem(state)

});


export default connect(
    mapStateToProps,
    {
        loadHomeProducts
    }
    //  mapDispatchToProps
)(Product);
