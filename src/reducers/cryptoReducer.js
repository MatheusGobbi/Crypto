import { SET_TOP_LIST } from '../actions'

const INITIAL_STATE = {
    topList: [],
    favoritos: []
}

export default function cryptoReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_TOP_LIST:
            return {
                ...state,
                topList: action.payload
            }
        default:
            return state;
    }
}

