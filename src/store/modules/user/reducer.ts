import produce from "immer";
import types from "./types";
import { TActionUser, TUser } from '../../../utils/types'

const INITIAL_STATE: TUser = {
    profile: {},
    loading: true
}

function user(state = INITIAL_STATE, action: TActionUser) {

    return produce(state, draft => {

        switch (action.type) {
            case types.SIGN_IN_SUCCESS: {
                draft.profile = { ...state.profile, ...action.payload.profile }
                draft.loading = false
                return draft
            }

            case types.USER_UPDATE_REQUEST: {
                draft.loading = true
                return draft
            }

            case types.USER_UPDATE_SUCCESS: {
                draft.profile = { ...state.profile, ...action.payload.profile }
                draft.loading = false
                return draft
            }

            case types.USER_UPDATE_FAILURE: {
                draft.loading = false
                return draft
            }

            case types.SIGN_OUT: {
                draft.profile = null
                draft.loading = false
                return draft
            }

            default:
                return state
        }

    })
}

export default user