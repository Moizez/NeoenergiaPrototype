import { TActionAuth, TSignInSucces } from "../../../utils/types";
import types from "./types";

export function signInRequest(payload: any) {
    return { type: types.SIGN_IN_REQUEST, payload }
}

export function signInSuccess({ token, profile }: TSignInSucces): TActionAuth | any {
    return { type: types.SIGN_IN_SUCCESS, payload: { token, profile } }
}

export function signUpRequest(payload: any) {
    return { type: types.SIGN_UP_REQUEST, payload }
}

export function signInFailure() {
    return { type: types.SIGN_IN_FAILURE };
}

export function signOutRequest() {
    return { type: types.SIGN_OUT }
}

export function onboardRequest() {
    return { type: types.ONBOARD }
}

