import React from 'react';
import banner from '../../img/0Jrvgf38V8.jpg';
import {connect} from 'react-redux';
import {getProductsItem} from '../../selectors/homeProductsSelectors';
import {loadHomeProducts} from "../../action/homeProductsAction";
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class Product extends React.Component {
    componentDidMount() {
        this.props.loadHomeProducts();
    }

    render() {

        const styles = {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
            },
            gridList: {
                width: '100%',
                height: '100%',
                overflowY: 'auto',
            },
            btn: {
                marginRight: 20
            }
        };

        return (
            <MuiThemeProvider>
                <div style={styles.root}>
                    <GridList
                        cellHeight={180}
                        style={styles.gridList}
                    >
                        <Subheader>Products</Subheader>
                        {this.props.products.map((el) => (
                            <GridTile
                                key={el.id}
                                title={el.name}
                                subtitle={<span><b>{el.description}</b></span>}
                                actionIcon={<FloatingActionButton style={styles.btn}>
                                    <ContentAdd/>
                                </FloatingActionButton>}
                            >
                                <img src={el.img}/>
                            </GridTile>
                        ))}
                    </GridList>
                </div>
            </MuiThemeProvider>
            /*<div className={'products-list'}>
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
            </div>*/
        );
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
    //  mapDispatchToProps
)(Product);
