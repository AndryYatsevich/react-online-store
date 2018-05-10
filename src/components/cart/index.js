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

        let productId = el.id;
        let productCart = {};
        for (let key in this.props.productCart) {
            productCart[key] = this.props.productCart[key];
        }

    if (productCart[productId] > 1) {

        productCart[productId] -= 1;
        this.props.updateProductToCartAction(productCart);

    } else {
        delete productCart[productId];
        this.props.deleteProductToCartAction(productCart);
    }


    };
    addMoreProduct = (el) => {
        let productId = el.id;
        let productCart = {};
        for (let key in this.props.productCart) {
            productCart[key] = this.props.productCart[key];
        }
        productCart[productId] += 1;
        this.props.updateProductToCartAction(productCart);
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
                { Object.keys(this.props.productCart).length === 0 ?<Paper style={style} zDepth={1} className={'content'}> <div>Корзина пуста</div> </Paper> :


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

                                    {this.props.products.map((el) => {
                                        console.log(this.props, ' cart table');
                                        for (let key in this.props.productCart){

                                            if(el.id.toString() === key) {
                                                let count = this.props.productCart[key];
                                                   return <TableRow key={el.id}>
                                                    <TableRowColumn>{el.name}</TableRowColumn>
                                                    <TableRowColumn>{el.description}</TableRowColumn>
                                                    <TableRowColumn>{el.price}</TableRowColumn>
                                                    <TableRowColumn>{count}</TableRowColumn>
                                                    <TableRowColumn><FlatButton label="Удалить" secondary={true} onClick={() => this.deleteProduct(el)}/>
                                                        <FlatButton label="Добавить" secondary={true} onClick={() => this.addMoreProduct(el)}/>
                                                    </TableRowColumn>

                                                      {this.state.resultPrice += el.price * count}
                                                </TableRow>

                                            }                                        }
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
    products: state.loadProducts

});

const mapDispatchToProps = (dispatch) => ({
    deleteProductToCartAction: product => (dispatch(deleteProductToCartAction(product))),
    updateProductToCartAction: product => (dispatch(updateProductToCartAction(product)))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);