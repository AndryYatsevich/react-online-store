import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/menu';
import {Grid, Row, Col} from 'react-flexbox-grid'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Grid fluid>
                    <Row>
                        <Col xs={3}>
                            Лого
                        </Col>
                        <Col xs={6}>
                            <Row>
                                <Col xs={12}>
                                    Поиск
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            <Menu />

                        </Col>
                        <Col xs={9}>
                            <article>


                            </article>
                        </Col>
                    </Row>

                </Grid>
            </div>
        );
    }
}

export default App;
