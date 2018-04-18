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
import Category from './components/category';
import Cart from './components/cart';

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
                    <Route path='/products/:category/:id' component={Category}/>
                    <Route path='/products/:category' component={Category} />
                    <Route path='/catalog' component={Catalog} />
                    <Route path='/faq' component={Faq} />
                    <Route path='/about-us' component={AboutUs} title="Takoe"/>
                    <Route path='/work-with-us' component={WorkWithUs} />
                    <Route path='/cart' component={Cart} />
                </Switch>
            </App>

        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
