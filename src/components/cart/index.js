import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {connect} from "react-redux";
import {deleteProductToCartAction, updateProductToCartAction} from "../../action/addProductToCartAction";
import FlatButton from 'material-ui/FlatButton';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: false,
            selectable: false,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            showCheckboxes: false,
            height: '300px',
            resultPrice: 0
        };

    }

    deleteProduct = (el) => {
        console.log(el, 'deleteProduct', this.state);
    if (el.productCount !== 1) {
        el.productCount = el.productCount - 1;
        this.props.updateProductToCartAction(el);
    } else {
        this.props.deleteProductToCartAction(el);
    }


    };
    addMoreProduct = (el) => {
        el.productCount = el.productCount + 1;
        this.props.updateProductToCartAction(el);
    };
    render() {
        const style = {
            padding: '10px',
            height: '100%',
            width: '100%'
        };

        this.state.resultPrice = 0;
        return (
            <MuiThemeProvider>
                {this.props.productCart.length === 0 ?<Paper style={style} zDepth={1} className={'content'}> <div>Корзина пуста{console.log('takoe')}</div> </Paper> :


                    <Paper style={style} zDepth={1} className={'content'}>
                        <div>Корзина</div>
                        <div>
                            <Table
                                height={this.state.height}
                                fixedHeader={this.state.fixedHeader}
                                fixedFooter={this.state.fixedFooter}
                                selectable={this.state.selectable}
                                multiSelectable={this.state.multiSelectable}
                            >
                                <TableHeader
                                    displaySelectAll={this.state.showCheckboxes}
                                    adjustForCheckbox={this.state.showCheckboxes}
                                    enableSelectAll={this.state.enableSelectAll}
                                >

                                    <TableRow>
                                        <TableHeaderColumn tooltip="Название">Название</TableHeaderColumn>
                                        <TableHeaderColumn tooltip="Описание">Описание товара</TableHeaderColumn>
                                        <TableHeaderColumn tooltip="Цена">Цена</TableHeaderColumn>
                                        <TableHeaderColumn tooltip="Количество">Количество</TableHeaderColumn>
                                        <TableHeaderColumn tooltip=""></TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody
                                    displayRowCheckbox={this.state.showCheckboxes}
                                    deselectOnClickaway={this.state.deselectOnClickaway}
                                    showRowHover={this.state.showRowHover}
                                    stripedRows={this.state.stripedRows}
                                >
                                    {this.props.productCart.map((el) => {
                                        for(let i = 0; i < this.props.products.products.length; i++){
                                            if(el.productId === this.props.products.products[i].id) {
                                                return   <TableRow key={el.productId}>
                                                    {console.log(el, el.index)}
                                                    <TableRowColumn>{this.props.products.products[i].name}</TableRowColumn>
                                                    <TableRowColumn>{this.props.products.products[i].description}</TableRowColumn>
                                                    <TableRowColumn>{this.props.products.products[i].price}</TableRowColumn>
                                                    <TableRowColumn>{el.productCount}</TableRowColumn>
                                                    <TableRowColumn><FlatButton label="Удалить" secondary={true} onClick={() => this.deleteProduct(el)}/>
                                                    <FlatButton label="Добавить" secondary={true} onClick={() => this.addMoreProduct(el)}/>
                                                    </TableRowColumn>
                                                    {console.log(this.props.products    )}
                                                    {this.state.resultPrice     += this.props.products.products[i].price * el.productCount}
                                                </TableRow>
                                            }

                                    }

                                    })}
                                </TableBody>

                            </Table>
                            <div>Всего: {this.state.resultPrice}</div>
                        </div>
                    </Paper>
                }
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (state) => ({

    productCart: state.loadProductCart,
    products: state.loadCategory

});

const mapDispatchToProps = (dispatch) => ({
    deleteProductToCartAction: product => (dispatch(deleteProductToCartAction(product))),
    updateProductToCartAction: product => (dispatch(updateProductToCartAction(product)))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);