import React from 'react';
import {Link} from 'react-router-dom';

class CatalogItem extends React.Component {

    render() {
        return (
            <div className={'catalog'}>
                {this.props.product.map((el) => {
                    return <Link to={`/products/${el.type}`}>
                    <div className={'catalog-item'}>
                            <div className={'catalog-img-wrap'}><img className={'catalog-img'} src={'../../img/' + el.img} alt={''}/></div>
                            <div className={'catalog-name'}>{el.name}</div>
                        </div>
                    </Link>

                })}
            </div>
        )
    }
}

export default CatalogItem;