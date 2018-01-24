import React from 'react';
import {connect} from 'react-redux';
import {getMenuItem} from '../../selectors/menuSelectors';
import {loadMenuItem} from "../../action/menuAction";

class Menu extends React.Component {

    componentDidMount() {
        this.props.loadMenuItem();
    }


    render() {
        return (
            <div>
                {
                    this.props.menuItem.map(function(el){
                        return <a><div key={el.id} className={'menu-item'}>{el.name}</div></a>
                    })
                }
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


