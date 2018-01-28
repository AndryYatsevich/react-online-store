import React from 'react';
import {connect} from 'react-redux';
import {getMenuItem} from '../../selectors/menuSelectors';
import {loadMenuItem} from "../../action/menuAction";

import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Menu extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.loadMenuItem();
    }


    /*    */

    render() {
        const style = {
            display: 'inline-block',
            margin: '16px 32px 16px 0',
            width: '100%'
        };
        return (
            <MuiThemeProvider>
                <Paper style={style}>
                    {
                        this.props.menuItem.map(function (el) {
                           return <MenuItem primaryText={el.name}/>
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


