import React from 'react';
import Router from './Router';

import store from './store';

import { Provider } from 'react-redux';

const CryptoApp = prop => (
    <Provider store={store}> 
        <Router />
    </Provider>
);

export default CryptoApp;