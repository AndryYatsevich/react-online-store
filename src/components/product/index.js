import React from 'react';
import {connect} from 'react-redux';
import {getProductsItem} from '../../selectors/homeProductsSelectors';
import {loadHomeProducts} from "../../action/homeProductsAction";
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Link} from 'react-router-dom';
import ProductItem from '../productItem/index';

class Product extends React.Component {
    componentDidMount() {
        this.props.loadHomeProducts();
    }

    render() {
        let showHomeProduct = [];
        let randomItem = [];
        let randomProductCurrent;

        for (let i = 0; i < 4; i++) {
             randomProductCurrent = getRandomArbitary(0, this.props.products.length);
            for (let j = 0; j < randomItem.length; j++) {
                if (randomProductCurrent === randomItem[j]) {
                    randomProductCurrent = getRandomArbitary(0, this.props.products.length);
                }
            }
            randomItem.push(randomProductCurrent);
            showHomeProduct.push(this.props.products[randomProductCurrent]);
        }

        function getRandomArbitary(min, max) {
            return Math.floor(Math.random() * (max - min) + min);

        }

        return <MuiThemeProvider>

            <div className={'category'}>
                <ProductItem product={showHomeProduct}/>
            </div>
        </MuiThemeProvider>;
    }
}


const mapStateToProps = (state) => ({

    products: getProductsItem(state)

});


export default connect(
    mapStateToProps,
    {
        loadHomeProducts
    }
)(Product);
