import React from 'react';
import { SafeAreaView, StatusBar, YellowBox } from 'react-native';

import firebase from 'firebase';
require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyAe_5fkfL9a25X8-nqd_L6TJLDM_ZcjrY0",
    authDomain: "crypto-b8117.firebaseapp.com",
    databaseURL: "https://crypto-b8117.firebaseio.com",
    projectId: "crypto-b8117",
    storageBucket: "crypto-b8117.appspot.com",
    messagingSenderId: "659426029326",
    appId: "1:659426029326:web:6554f13b161f437a6df15f",
    measurementId: "G-K0F3NMTYL1"
  };
// Initialize Firebase
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

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