import {
    ADD_POST_CALL, ADD_POST_SUCCESS,ADD_POST_FAIL,GET_POST_SUCCESS,GET_POST_CALL,ADD_USER_UPDATE_CALL, ADD_USER_UPDATE_SUCCESS,ADD_USER_UPDATE_FAIL,
    GET_PEOPLE_SUCCESS,GET_PEOPLE_CALL,SEND_MESSAGE_CALL, SEND_MESSAGE_SUCCESS,SEND_MESSAGE_FAIL
} from '../constants'


export default class Actions {

    static AddpostCall(data) {
        return {
            type: ADD_POST_CALL,
            payload: data
        }
    }
    static AddpostSuccess(data) {
        return {
            type: ADD_POST_SUCCESS,
            payload: data
        }
    }
    static AddpostFail(data) {
        return {
            type: ADD_POST_FAIL,
            payload: data
        }
    }
    static GetpostCall() {
        return {
            type: GET_POST_CALL,
        }
    }
    static GetpostSuccess(data) {
        return {
            type: GET_POST_SUCCESS,
            payload: data
        }
    }
    static GetPeopleCall() {
        return {
            type: GET_PEOPLE_CALL,
        }
    }
    static GetPeopleSuccess(data) {
        return {
            type: GET_PEOPLE_SUCCESS,
            payload: data
        }
    }
    static AddUserCall(data) {
        return {
            type: ADD_USER_UPDATE_CALL,
        }
    }
    static AddUserSuccess(data) {
        return {
            type: ADD_USER_UPDATE_SUCCESS,
            payload: data
        }
    }
    static AddUserFail(data) {
        return {
            type: ADD_USER_UPDATE_FAIL,
            payload: data
        }
    }
    static sendMessageCall() {
        return {
            type: SEND_MESSAGE_CALL,
        }
    }
    static sendMessageSuccess(data) {
        return {
            type: SEND_MESSAGE_SUCCESS,
            payload: data
        }
    }
    static sendMessageFail(data) {
        return {
            type: SEND_MESSAGE_FAIL,
            payload: data
        }
    }
}