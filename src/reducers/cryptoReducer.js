import { SET_TOP_LIST, SET_FAVORITOS } from '../actions'

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
        case SET_FAVORITOS:
            return {
                ...state,
                favoritos: action.payload
            }
        default:
            return state;
    }
}

