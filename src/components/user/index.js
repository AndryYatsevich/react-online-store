import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {loadProducts} from "./action";

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: 'User_name', cart: this.props.cart, price: 0, count: 0};

    }

    componentWillMount() {
        this.props.loadProducts();
    }

   /* shouldComponentUpdate() {
        //return false;

    };*/
    cartInfo = () => {

        let cartCount = 0;
        let cartPrice = 0;
        this.props.products.map((el) => {
            for (let key in this.props.cart) {
                if (el.id.toString() === key) {
                    let countProduct = this.props.cart[key];
                    cartCount += countProduct;
                    cartPrice += el.price * countProduct;
                }

            }
        });
        console.log('cartCount', cartCount, 'cartPrice ', cartPrice);
        return <div>
            <div>Количество товара: {cartCount}</div>
            <div>Общая стоимость: ${cartPrice}</div>
        </div>

    };

    render() {

        return (
            <div className={'user'}>
                <Link to={'/cart'} key={'cart'}>
                    <div>Welcome, {this.state.name}!</div>
                    <div className={'wrap-user-info'}>
                        <div className={'user-avatar'}>Картинка</div>
                        <div className={'user-info'}>
                            My cart <br/>
                            {this.cartInfo()}
                        </div>

                    </div>
                </Link>

            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.loadProductCart,
    products: state.loadProducts,
    products1: state.loadProducts

});

export default connect(
    mapStateToProps,
    {

        loadProducts
    }
)(User);