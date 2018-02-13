import React from 'react';

class CatalogItem extends React.Component {

    render() {
        return (
            <div className={'catalog'}>
                {this.props.product.map((el) => {
                    return <div className={'catalog-item'}>
                            <div className={'catalog-img-wrap'}><img className={'catalog-img'} src={'../../img/' + el.img} alt={''}/></div>
                            <div className={'catalog-name'}>{el.name}</div>
                        </div>

                })}
            </div>
        )
    }
}

export default CatalogItem;