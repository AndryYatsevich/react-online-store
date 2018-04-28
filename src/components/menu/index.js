import React from 'react';
import {connect} from 'react-redux';
//import {getMenuItem} from '../../selectors/menuSelectors';
import {loadMenuItem} from "./action";
import {Link} from 'react-router-dom';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {loadMenuReducer } from "./reducer";

class Menu extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.loadMenuItem('/menu.json');
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
                    {console.log('============================================>', this.props)}
                    {
                        this.props.menuItem.map(function (el) {
                           return <Link to={`/products/${el.type}`} key={el.id} className={'menu'}>
                           <MenuItem primaryText={el.name} />

                           </Link>
                        })}


                </Paper>
            </MuiThemeProvider>

        );
    }
}

const mapStateToProps = (state) => ({

    menuItem: state.loadMenuReducer

});


export default connect(
    mapStateToProps,
    {
        loadMenuItem
    }
    //  mapDispatchToProps
)(Menu);


