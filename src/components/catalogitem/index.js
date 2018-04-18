import React from 'react';
import {Link} from 'react-router-dom';

class CatalogItem extends React.Component {

    render() {
        return (
            <div className={'catalog'}>
                {this.props.product.map((el) => {
<<<<<<< HEAD
                    return <div className={'catalog-item'} key={el.id}>
=======
                    return <Link to={`/products/${el.type}`}>
                    <div className={'catalog-item'}>
>>>>>>> 227744c7ecdbdcaf512b768a6ab3f07585a7ccd2
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