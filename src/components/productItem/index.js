import React from 'react';
import {Link} from 'react-router-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ProductItem extends React.Component {

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
                            <div><FloatingActionButton>
                                <ContentAdd/>

                            </FloatingActionButton></div>
                        </div>
                    </MuiThemeProvider>

                })}
            </div>
        )
    }
}

export default ProductItem;