import axios from 'axios';
import { Alert } from 'react-native';
import store from '../store';

export const ASYNC_GET_TOP_LIST = 'ASYNC_GET_TOP_LIST';
export const SET_TOP_LIST = 'SET_TOP_LIST';


const asyncGetTopList = async () => {
    const topList = await axios.get('http://192.168.0.193:3000/getTopList');
    Alert.alert(JSON.stringify(topList.data));
    store.dispatch({
        type: SET_TOP_LIST,
        payload: topList.data
    })
};

export const getTopList = () => {
    asyncGetTopList();
    return ({
        type: ASYNC_GET_TOP_LIST,
    });
};
