import axios from 'axios';
import { Alert } from 'react-native';
import store from '../store';

export const ASYNC_GET_TOP_LIST = 'ASYNC_GET_TOP_LIST';
export const ASYNC_GET_FAVORITOS = 'ASYNC_GET_FAVORITOS';
export const SET_FAVORITOS = 'SET_FAVORITOS';
export const SET_TOP_LIST = 'SET_TOP_LIST';


const asyncGetTopList = async () => {
    const topList = await axios.get('http://192.168.0.193:3000/getTopList');
    store.dispatch({
        type: SET_TOP_LIST,
        payload: topList.data
    })
    asyncGetFavoritos();
};

const asyncGetFavoritos = async () => {
    //const topList = await axios.get('http://192.168.0.193:3000/getTopList');
    const idFavoritos = ['925939','204788'];

    const favoritos = [];

    for (const moeda of store.getState().crypto.topList){
        if (idFavoritos.includes(moeda.id)){
            favoritos.push(moeda)
        }
    }

    store.dispatch({
        type: SET_FAVORITOS,
        payload: favoritos
    })
};

export const getTopList = () => {
    asyncGetTopList();
    return ({
        type: ASYNC_GET_TOP_LIST,
    });
};
