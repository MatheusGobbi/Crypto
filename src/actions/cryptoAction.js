import axios from 'axios';
import { Alert } from 'react-native';
import store from '../store';
import firebase from 'firebase';
require('firebase/firestore');

export const ASYNC_GET_TOP_LIST = 'ASYNC_GET_TOP_LIST';
export const ASYNC_GET_FAVORITOS = 'ASYNC_GET_FAVORITOS';
export const SET_FAVORITOS = 'SET_FAVORITOS';
export const SET_TOP_LIST = 'SET_TOP_LIST';

const asyncGetFavoritos = async () => {
    try {
        // Alert.alert(JSON.stringify(firebase.firestore()));
        const { uid } = firebase.auth().currentUser;

        const usuarioDoc = await firebase.firestore().collection("usuarios").doc(uid).get();

        const idFavoritos = usuarioDoc.data().favoritos;

        const favoritos = [];

        for (const moeda of store.getState().crypto.topList) {
            if (idFavoritos.includes(moeda.id)) {
                favoritos.push(moeda)
            }
        }

        store.dispatch({
            type: SET_FAVORITOS,
            payload: favoritos
        })
    } catch (error) {
        console.log(error);
        throw error
    }
};

const asyncGetTopList = async () => {
    const topList = await axios.get('https://crypto-servico.herokuapp.com/getTopList');

    if (topList.data.length > 0) {
        store.dispatch({
            type: SET_TOP_LIST,
            payload: topList.data
        });
        asyncGetFavoritos();
    }
};


export const getTopList = () => {
    asyncGetTopList();
    return ({
        type: ASYNC_GET_TOP_LIST,
    });
};
