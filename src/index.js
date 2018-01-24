import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
/*import Catalog from './components/catalog';
import Faq from './components/faq';
/!*import Home from './components/home';*!/
import AboutUs from './components/aboutus';
import WorkWithUs from './components/workwithus';

import { BrowserRouter as Router, Route  } from 'react-router-dom';*/
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
