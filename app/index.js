import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'babel-polyfill';
import 'isomorphic-fetch';

import RouterMap from './router/RouterMap';
import configureStore from './store/configureStore';
import './static/css/common.scss';
import './static/css/font.css';

const store=configureStore();

ReactDOM.render(
    <Provider store={store}>
        <RouterMap/>
    </Provider>,
    document.getElementById('root')
);

