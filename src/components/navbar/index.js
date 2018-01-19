import React from 'react';

import {Link}  from 'react-router-dom'

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = { navBarItem: [
            { id: 1, name: 'Catalog', link: '/catalog'},
            { id: 2, name: 'About Us', link: '/about-us'},
            { id: 3, name: 'Work with Us', link: '/work-with-us'},
            { id: 4, name: 'F.A.Q.', link: '/faq'}]};
    }

    componentDidMount() {

    }


    render() {
        return (
            <div className={'nav-bar'}>
                {
                    this.state.navBarItem.map(function(el){
                        return <Link key={el.id} className={'nav-bar-item'} to={el.link}>{el.name}</Link>
                    })
                }
            </div>

        );
    }
}

export default NavBar;