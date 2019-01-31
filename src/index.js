import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configuretStore from './store/configureStore';
import defaultState from './store/defaultState';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
//import Counter from './components/counter';
//import Counters from './components/counters';

const store = configuretStore (defaultState);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
