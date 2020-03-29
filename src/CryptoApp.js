import React from 'react';
import { SafeAreaView, StatusBar, YellowBox } from 'react-native';

import Router from './Router';

import store from './store';

import { Provider } from 'react-redux';
YellowBox.ignoreWarnings(['Warning', 'Require']);

const CryptoApp = prop => (
    <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
            <Provider store={store}>
                <Router />
            </Provider>
    </SafeAreaView>
);

export default CryptoApp;