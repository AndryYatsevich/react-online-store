import React from 'react';

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = { menuItem: [
            { id: 1, name: 'Computers'},
            { id: 2, name: 'Phones'},
            { id: 3, name: 'TVs'},
            { id: 4, name: 'Game console'},
            { id: 5, name: 'Servers'},
            { id: 6, name: 'Soft'},
            { id: 7, name: 'Books'}]};
    }

    componentDidMount() {

    }


    render() {
        return (
            <div>
                {
                    this.state.menuItem.map(function(el){
                        return <a><div key={el.id} className={'menu-item'}>{el.name}</div></a>
                    })
                }
            </div>

        );
    }
}

export default Menu;