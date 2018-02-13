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
                width: '80%',
                height: '100%',
                overflowY: 'auto',
            },
            btn: {
                marginRight: 20
            }
        };

        return (
            <MuiThemeProvider>
                <div style={styles.root} className={'content'}>
                    <GridList
                        cellHeight={180}
                        style={styles.gridList}

                    >
                        <Subheader>Products</Subheader>
                        {this.props.products.map((el) => (
                            <GridTile
                                key={el.id}
                                title={<Link to={`/products/${el.name}/${el.id}`} className={'menu'}>el.name</Link>}
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
            </MuiThemeProvider>
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
