import {
    ADD_USER_UPDATE_CALL, ADD_USER_UPDATE_SUCCESS,ADD_USER_UPDATE_FAIL,
      SHOW_MESSAGE_SUCCESS,SHOW_MESSAGE_CALL, SIGNUP_CALL, SIGNUP_FAIL,
       SIGNUP_SUCCESS, SIGN_FAIL, SIGN_SUCCESS, SIGN_CALL,CHECK_USER_CALL,
       CHECK_USER_SUCCESS,CHECK_USER_FAIL,
       LOGOUT_CALL,LOGOUT_FAIL,LOGOUT_SUCCESS,
} from '../constants';
var userLL= localStorage.getItem('user')
var isAuthenticatedLL = JSON.parse(localStorage.getItem('isAuthenticated'))
const initialState = {
   loader:false,
   isAuthenticated: isAuthenticatedLL||false,
   message:'',
   error:false,
   user: isAuthenticatedLL&&JSON.parse(userLL) ||{}
}

export default function Auth(state = initialState, action) {
    switch (action.type) {
        case SIGNUP_CALL:
            state = {
                ...state,
                loader: true,
                message:'',
                error:false
            }
            break;
        case SIGNUP_SUCCESS:
            state = {
                ...state,
                loader: false,
                message: action.payload.message,
                isAuthenticated:true,
                error:false
            }
            break;
        case SIGNUP_FAIL:
            state = {
                ...state,
                loader: false,
                message: action.payload.message,
                isAuthenticated:false,
                error:true

            }
            break;
        case SIGN_CALL:
            state = {
                ...state,
                loader: true,
                message:'',
                error:false
            }
            break;
        case SIGN_SUCCESS:
            state = {
                ...state,
                loader: false,
                message: action.payload.message,
                isAuthenticated:true,
                error:false
            }
            break;
        case SIGN_FAIL:
            state = {
                ...state,
                loader: false,
                message: action.payload.message,
                isAuthenticated:false,
                error:true

            }
            break;
            case CHECK_USER_CALL:
                state = {
                    ...state,
                    isAuthenticated:false
                }
                break;
                case CHECK_USER_SUCCESS:
            state = {
                ...state,
                user: action.payload,
                isAuthenticated:true,

            }
            break;
            case CHECK_USER_FAIL:
            state = {
                ...state,
                user: {},
                isAuthenticated:false,

            }
            break;
            case SHOW_MESSAGE_CALL:
                state = {
                    ...state,
                    message:'',
                    error:false
                }
                break;
            case SHOW_MESSAGE_SUCCESS:
                state = {
                    ...state,
                    message: action.payload.message,
                    error:false
                }
                break;
                case LOGOUT_CALL:
                    state = {
                        ...state,
                        loader: true,
                        message:'',
                        error:false
                    }
                    break;
                case LOGOUT_SUCCESS:
                    state = {
                        ...state,
                        loader: false,
                        message: 'Logout Success',
                        isAuthenticated:false,
                        error:false
                    }
                    break;
                case LOGOUT_FAIL:
                    state = {
                        ...state,
                        loader: false,
                        message: action.payload.message,
                        isAuthenticated:false,
                        error:true
                    }
                    break;
        default:
            break;
    }
    return state;
}