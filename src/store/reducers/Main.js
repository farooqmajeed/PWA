import {
    GET_POST_SUCCESS,GET_POST_CALL,UPLOADED, GET_PEOPLE_SUCCESS,GET_PEOPLE_CALL
    ,SEND_MESSAGE_CALL, SEND_MESSAGE_SUCCESS,SEND_MESSAGE_FAIL
} from '../constants';

const initialState = {
   addpost:[],
   uploaded:[],
   people:{}
}

export default function Main(state = initialState, action) {
    switch (action.type) {
        case GET_POST_CALL:
            state = {
                ...state,
            }
            break;
        case GET_POST_SUCCESS:
                state = {
                    ...state,
                    addpost:action.payload
                }
                break;
        case UPLOADED:
                    state = {
                        ...state,
                        uploaded: [...state.uploaded,action.payload]
                    }
                    break;
                    case GET_PEOPLE_CALL:
                        state = {
                            ...state,
                        }
                        break;
                    case GET_PEOPLE_SUCCESS:
                            state = {
                                ...state,
                                people:action.payload
                            }
                            break;
        default:
            break;
    }
    return state;
}