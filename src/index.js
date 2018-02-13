import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Catalog from './components/catalog';
import Faq from './components/faq';
import Home from './components/home';
import AboutUs from './components/aboutus';
import WorkWithUs from './components/workwithus';
import Category from './components/catagory';

import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/products/:category' component={Category} />
                    <Route path='/product/:category/:id' component={Faq} />
                    <Route path='/catalog' component={Catalog} />
                    <Route path='/faq' component={Faq} />
                    <Route path='/about-us' component={AboutUs} />
                    <Route path='/work-with-us' component={WorkWithUs} />

                </Switch>
            </App>
            {/*<Route path='/' component={App}>
                <Route path='/home' component={Home}/>
                <Route path='/catalog' component={Catalog} />
                <Route path='/faq' component={Faq} />
                <Route path='/aboutus' component={AboutUs} />
                <Route path='/workwithus' component={WorkWithUs} />
            </Route>*/}

        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
