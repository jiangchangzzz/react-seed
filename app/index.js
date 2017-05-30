import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import RouterMap from './router/RouterMap';
import './static/css/common.scss';
import configureStore from './store/configureStore';

const store=configureStore();

ReactDOM.render(
    <Provider store={store}>
        <RouterMap/>
    </Provider>,
    document.getElementById('root')
);

