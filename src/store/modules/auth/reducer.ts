import produce from "immer";
import types from "./types";
import { TAuth } from '../../../utils/types'

const INITIAL_STATE: TAuth = {
    token: null,
    signed: false,
    loading: false,
    onboard: false
}

function auth(state = INITIAL_STATE, action: any) {

    return produce(state, draft => {

        switch (action.type) {
            case types.SIGN_IN_REQUEST: {
                draft.loading = true
                return draft
            }

            case types.SIGN_IN_SUCCESS: {
                draft.token = action.payload.token
                draft.signed = true
                draft.loading = false
                return draft
            }

            case types.SIGN_UP_REQUEST: {
                draft.loading = true
                return draft
            }

            case types.SIGN_IN_FAILURE: {
                draft.loading = false
                return draft
            }

            case types.ONBOARD: {
                draft.onboard = true
                return draft
            }

            case types.SIGN_OUT: {
                draft.token = null
                draft.signed = false
                draft.loading = false
                return draft
            }

            default:
                return state
        }

    })
}

export default auth