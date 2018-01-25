import React from 'react';
import logo from '../../img/logo.png';
import {Link}  from 'react-router-dom'

class Logo extends React.Component {

    render() {
        return (
            <div>
                <Link to='/'><img  style={{width:'160px'}} src={logo} alt={'logo'}/></Link>
            </div>
        );
    }
}

export default Logo;