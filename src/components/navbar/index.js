import React from 'react';

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = { navBarItem: [
            { id: 1, name: 'Catalog'},
            { id: 2, name: 'About Us'},
            { id: 3, name: 'Work with Us'},
            { id: 4, name: 'F.A.Q.'}]};
    }

    componentDidMount() {

    }


    render() {
        return (
            <div className={'nav-bar'}>
                {
                    this.state.navBarItem.map(function(el){
                        return <a key={el.id} className={'nav-bar-item'}>{el.name}</a>
                    })
                }
            </div>

        );
    }
}

export default NavBar;