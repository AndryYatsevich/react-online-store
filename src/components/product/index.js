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
            console.log("1.", "randomItem:", randomItem, "i:", i, "randomProductCurrent:", randomProductCurrent);
            randomProductCurrent = getRandomArbitary(0, this.props.products.length);

            console.log("2.", "randomItem:", randomItem, "i:", i, "randomProductCurrent:", randomProductCurrent);
            for (let j = 0; j < randomItem.length; j++) {

                if (randomProductCurrent === randomItem[j]) {
                    randomProductCurrent = getRandomArbitary(0, this.props.products.length);
                    console.log("3.", "randomItem:", randomItem, "j:", j, "randomProductCurrent:", randomProductCurrent);
                }


            }
            randomItem.push(randomProductCurrent);
            console.log("4.", randomProductCurrent);
            showHomeProduct.push(this.props.products[randomProductCurrent]);
        }

        function getRandomArbitary(min, max) {
            return Math.floor(Math.random() * (max - min) + min);

        }

        {
            console.log(showHomeProduct, randomItem)
        }
        const styles = {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
            },
            gridList: {
                width: '60%',
                height: '100%',
                overflowY: 'auto',
            },
            btn: {
                marginRight: 20
            }
        };
        return <MuiThemeProvider>

            <div className={'category'}>


                <ProductItem product={showHomeProduct}/>

            </div>
        </MuiThemeProvider>;


        {/*<MuiThemeProvider>
                <div style={styles.root} className={'content'}>
                    <GridList
                        cellHeight={180}
                        style={styles.gridList}

                    >

                        <Subheader>Products</Subheader>
                        showHomeProduct.map((el) => (

                            <GridTile
                                key={el.id}
                                title={<Link to={`/products/${el.name}/${el.id}`} className={'menu'}>{el.name}</Link>}
                                subtitle={<div className={"product-info"}><div><b>{el.description}</b></div> <div className={"product-price"}><b>${el.price}</b></div></div>}

                                actionIcon={<FloatingActionButton style={styles.btn}>
                                    <ContentAdd/>

                                </FloatingActionButton>}
                            >
                                <img src={'../../img/' + el.img} alt={''}/>
                            </GridTile>
                        ))}
                    </GridList>
                </div>
            </MuiThemeProvider>*/
        }

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
