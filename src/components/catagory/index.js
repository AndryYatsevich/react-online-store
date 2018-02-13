import React from 'react';
import {Link} from 'react-router-dom';

class Section extends React.Component {

    render() {
        return (<div>
            <h1>Что-то</h1>
            <div><Link to={`/products/Phone/4234`} className={'menu'}>Клик</Link></div>
        </div>)
    }
}

export default Section;