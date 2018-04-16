import React from 'react';
import {connect} from 'react-redux';
import {getMenuItem} from '../../selectors/menuSelectors';
import {loadMenuItem} from "../../action/menuAction";
import {Link} from 'react-router-dom';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Menu extends React.Component {

    componentDidMount() {
        this.props.loadMenuItem();
    }


    /*    */

    render() {
        const style = {
            display: 'inline-block',
            margin: '0 32px 0 0',
            width: '100%'
        };
        return (
            <MuiThemeProvider>
                <Paper style={style}>
                    {
                        this.props.menuItem.map(function (el) {
                           return <Link to={`/products/${el.type}`} key={el.id} className={'menu'}>
                           <MenuItem primaryText={el.name} />

                           </Link>
                        })

                    }
                </Paper>
            </MuiThemeProvider>

        );
    }
}

const mapStateToProps = (state) => ({

    menuItem: getMenuItem(state)

});


export default connect(
    mapStateToProps,
    {
        loadMenuItem
    }
    //  mapDispatchToProps
)(Menu);


