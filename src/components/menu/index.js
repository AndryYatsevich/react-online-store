import React from 'react';
import {connect} from 'react-redux';
import {getMenuItem} from '../../selectors/menuSelectors';
import {loadMenuItem} from "../../action/menuAction";

import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem'

class Menu extends React.Component {
    constructor(props){
        super(props);
        const style = () => { {
            display: 'inline-block',
            margin: '16px 32px 16px 0'}
        };
    }
    componentDidMount() {
        this.props.loadMenuItem();
    }


/*    */

    render() {
        return (
            <div>
                <Paper style={this.style}>

                    <MenuItem primaryText={this.props.menuItem.map(function(el){
                        return <a><div key={el.id} className={'menu-item'}>{el.name}</div></a>
                    })} />

                </Paper>
            </div>

        );
    }
}

const mapStateToProps = (state) =>({

    menuItem: getMenuItem(state)

});


export default connect(
    mapStateToProps,
    {
        loadMenuItem
    }
  //  mapDispatchToProps
)(Menu);


