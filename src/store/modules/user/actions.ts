import types from "./types";

export function updateUserRequest(payload: any) {
    return {
        type: types.USER_UPDATE_REQUEST,
        payload
    }
}

export function updateUserSuccess(payload: any) {
    return {
        type: types.USER_UPDATE_SUCCESS,
        payload
    }
}

export function updateUserFailure() {
    return { type: types.USER_UPDATE_FAILURE }
}

