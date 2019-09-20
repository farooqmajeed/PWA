import {
    SHOW_MESSAGE_SUCCESS,
    SHOW_MESSAGE_CALL,UPLOADED,
    SIGNUP_CALL,SIGNUP_FAIL,SIGNUP_SUCCESS,
    SIGN_FAIL,SIGN_SUCCESS,SIGN_CALL,
    CHECK_USER_CALL,CHECK_USER_SUCCESS,CHECK_USER_FAIL,
    LOGOUT_CALL,LOGOUT_FAIL,LOGOUT_SUCCESS,
} from '../constants'


export default class AuthActions {

    static ShowMassgaeCall() {
        return {
            type: SHOW_MESSAGE_CALL,
        }
    }
    static ShowMassgaeSuccess(data) {
        return {
            type: SHOW_MESSAGE_SUCCESS,
            payload: data
        }
    }    
    static SignInCall() {
        return {
            type: SIGN_CALL,
        }
    }
    static SignInSuccess(data) {
        return {
            type: SIGN_SUCCESS,
            payload: data
        }
    }
    static SignInFailed(data) {
        return {
            type: SIGN_FAIL,
            payload: data
        }
    }
    static SignUpCall(data) {
        return {
            type: SIGNUP_CALL,
            payload: data
        }
    }
    static SignUpSuccess(data) {
        return {
            type: SIGNUP_SUCCESS,
            payload: data
        }
    }
    static SignUpFailed(data) {
        return {
            type: SIGNUP_FAIL,
            payload: data
        }
    }
    static CheckUser() {
        return {
            type: CHECK_USER_CALL,
        }
    }
    static CheckUserSuccess(data) {
        return {
            type: CHECK_USER_SUCCESS,
            payload: data
        }
    }
    static CheckUserFail() {
        return {
            type: CHECK_USER_FAIL,
        }
    }
    static Uploaded(data) {
        return {
            type: UPLOADED,
            payload:data
        }
    }
    static LogoutCall() {
        return {
            type: LOGOUT_CALL,
        }
    }
    static LogoutSuccess(data) {
        return {
            type: LOGOUT_SUCCESS,
            payload: data
        }
    }
    static LogoutFailed(data) {
        return {
            type: LOGOUT_FAIL,
            payload: data
        }
    }
}