import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import Router from './Router';

import store from './store';

import { Provider } from 'react-redux';
import FromRow from './components/FormRow';

const CryptoApp = prop => (
    <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
            <Provider store={store}>
                <Router />
            </Provider>
    </SafeAreaView>
);

export default CryptoApp;