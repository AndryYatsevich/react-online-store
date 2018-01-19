import React from 'react';
import logo from '../../img/logo.png'

class Logo extends React.Component {

    render() {
        return (
            <div>
                <a href={'#/home'}><img  style={{width:'160px'}} src={logo} alt={'logo'}/></a>
            </div>
        );
    }
}

export default Logo;