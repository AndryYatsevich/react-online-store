import React, {Component} from 'react';
import './App.css';
import Menu from './components/menu';
import NavBar from './components/navbar';
import Logo from './components/logo';
import Search from './components/search';
import User from './components/user';

import {Grid, Row, Col} from 'react-flexbox-grid'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: window.location.hash.substr(1)
        }
    }

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1)
            })
        })
    }

    render() {
        return (
            /*<div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>*/
            <Grid fluid className={'content2'}>
                <Row>
                    <Col xs={3}>
                        <Logo/>
                    </Col>
                    <Col xs={4}>
                        <Row>
                            <Col xs={12}>
                                <Search/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <NavBar/>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={5}>

                        <User/>

                    </Col>
                </Row>
                <Row className={'content'}>
                    <Col xs={2}>
                        <Menu/>

                    </Col>
                    <Col xs={10}>
                            {this.props.children}
                    </Col>
                </Row>
                <Row  className={'footer'}>
                    <Col xs={12}>
                        <footer>OpenDev 2018</footer>
                    </Col>
                </Row>


            </Grid>
            /*</div>*/
        );
    }
}

export default App;
