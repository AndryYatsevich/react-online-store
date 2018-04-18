import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Cart extends React.Component {


    render() {
        const style = {
            padding: '10px',
            height: '100%',
            width: '100%'
        };
        return (
            <MuiThemeProvider>
                <Paper style={style} zDepth={1} className={'content'}>
                    <div>Корзина</div>
                </Paper>
            </MuiThemeProvider>
        );
    }
}

export default Cart;