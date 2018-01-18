import React from 'react';
import logo from '../../img/logo.png'

class Logo extends React.Component {

    render() {
        return (
            <div>
                <img  style={{width:'160px'}} src={logo} alt={'logo'}/>
            </div>
        );
    }
}

export default Logo;