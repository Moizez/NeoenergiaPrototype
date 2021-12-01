import produce from "immer";
import types from "./types";
import { TStorageless, TActionStorageless } from '../../../utils/types'

const INITIAL_STATE: TStorageless = {
    activities: [],
    loading: true,
    alert: {
        message: '',
        color: '',
        time: 5000,
        visible: false
    }
}

function storageless(state = INITIAL_STATE, action: TActionStorageless) {

    return produce(state, draft => {

        switch (action.type) {

            case types.SET_REDUCER: {
                draft[action.key] = action.payload
                draft.loading = false
                return draft
            }

            case types.OPEN_ALERT: {
                draft.alert = { ...state.alert, ...action.payload.alert, visible: true }
                return draft
            }

            case types.CLOSE_ALERT: {
                draft.alert = {
                    message: '',
                    visible: false,
                    color: 'transparent'
                }
                return draft
            }

            default:
                return state
        }

    })
}

export default storageless