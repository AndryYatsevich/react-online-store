import React from 'react';
import {Link} from 'react-router-dom';

class User extends React.Component {
    constructor(props){
        super(props);
        this.state = { name: 'User_name', count: 3, price: '$432,32'};
    }

    componentDidMount() {

    }


    render() {
        return (
            <div className={'user'}>
                <Link to={'/cart'} key={'cart'}>
                <div>Welcome, {this.state.name}!</div>
                <div className={'wrap-user-info'}>
                    <div className={'user-avatar'}>Картинка</div>
                    <div className={'user-info'}>
                        My cart <br />
                        {this.state.count} - {this.state.price}
                    </div>

                </div>
                </Link>

            </div>

        );
    }
}

export default User;