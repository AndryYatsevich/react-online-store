import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Catalog from './components/catalog';
import Faq from './components/faq';
/*import Home from './components/home';*/
import AboutUs from './components/aboutus';
import WorkWithUs from './components/workwithus';

import { BrowserRouter as Router, Route  } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Route path='/' component={App}>

            <Route path='catalog32' component={Catalog} />
            <Route path='faq212' component={Faq} />
            <Route path='about-us' component={AboutUs} />
            <Route path='work-with-us' component={WorkWithUs} />
        </Route>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
