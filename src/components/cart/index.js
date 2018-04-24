import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {connect} from "react-redux";
import {deleteProductToCartAction} from "../../action/deleteProductToCartAction";
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


        this.props.deleteProductToCartAction(el);
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
                {this.props.productCart.length === 0 ? <div>Корзина пуста{console.log('takoe')}</div> :


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
                                        <TableHeaderColumn tooltip=""></TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody
                                    displayRowCheckbox={this.state.showCheckboxes}
                                    deselectOnClickaway={this.state.deselectOnClickaway}
                                    showRowHover={this.state.showRowHover}
                                    stripedRows={this.state.stripedRows}
                                >
                                    {this.props.productCart.map((el) => (

                                        <TableRow key={el.product.id}>
                                            {console.log(el, el.index)}
                                            <TableRowColumn>{el.product.name}</TableRowColumn>
                                            <TableRowColumn>{el.product.description}</TableRowColumn>
                                            <TableRowColumn>{el.product.price}</TableRowColumn>
                                            <TableRowColumn><FlatButton label="Удалить" secondary={true} onClick={() => this.deleteProduct(el.product.id)}/></TableRowColumn>

                                            {this.state.resultPrice += el.product.price * el.productCount}
                                        </TableRow>
                                    ))}s
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

    productCart: state.loadProductCart

});

const mapDispatchToProps = (dispatch) => ({
    deleteProductToCartAction: product => (dispatch(deleteProductToCartAction(product)))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);