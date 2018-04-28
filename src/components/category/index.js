import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getProductsCategoryItem} from '../../selectors/categoryProductsSelector';
import {loadCategoryProducts} from "../../action/categoryProductsAction";
import {GridList, GridTile} from 'material-ui/GridList';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Subheader from 'material-ui/Subheader';
import ProductItem from '../productItem/index';

class Category extends React.Component {
    componentDidMount() {
        this.props.loadCategoryProducts();
    }


    render() {
        let content;
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
        if (this.props.match.params.id) {
            console.log(this.props.products);
            content = (<div>{this.props.products.map((el) => {
                    console.log(this.props.match.params.id, el.id, this.props.match.params.id == el.id);
                    if (this.props.match.params.id == el.id) {
                        return <div className={"product-item"} key={el.id}>
                            <div className={"wrap-product-img"}><img className={"product-img"} src={'../../img/' + el.img} alt={''}/></div>
                            <div>
                                <div><h1>{el.name}</h1></div>
                                <div>
                                    <ul>{el.description.map((el) => {
                                        return <li className={"product-info-list"}>{el.info.map((el) => {
                                            return <div>{el}</div>
                                        })}</li>
                                    })}</ul>
                                </div>
                                <div>Цена: {el.price} р.</div>
                            </div>
                        </div>
                    }
                }
            )}

            </div>)
        } else {
            console.log(this.props.products);


            content = (


                <MuiThemeProvider>

                    <div className={'category'}>
                        {this.props.products.map((el) => {
                                let products = [];
                                if (this.props.match.params.category === el.type) {
                                    products.push(el);
                                    return <ProductItem product={products}/>
                                }
                            }
                        )}
                    </div>
                </MuiThemeProvider>)
        }


        return content;
    }
}

const mapStateToProps = (state) => ({

    products: getProductsCategoryItem(state)

});


export default connect(
    mapStateToProps,
    {
        loadCategoryProducts
    }
)(Category);