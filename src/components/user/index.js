import React from 'react';

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
                <div>Welcome, {this.state.name}!</div>
                <div className={'wrap-user-info'}>
                    <div className={'user-avatar'}>Картинка</div>
                    <div className={'user-info'}>
                        My cart <br />
                        {this.state.count} - {this.state.price}
                    </div>

                </div>


            </div>

        );
    }
}

export default User;