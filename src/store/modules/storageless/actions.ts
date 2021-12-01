import types from "./types";
import { TActionStorageless, TAlert, TStorageless } from "../../../utils/types";


export function setReducer(payload: TStorageless, key: string): TActionStorageless {
    return {
        type: types.SET_REDUCER,
        payload,
        key
    }
}

export function openAlert({ message, color, time }: TAlert): TActionStorageless {
    return {
        type: types.OPEN_ALERT,
        payload: {
            alert: { message, color, time }
        }
    }
}

export function closeAlert() {
    return { type: types.CLOSE_ALERT }
}

export function requestActivities() {
    return { type: types.GET_ACTIVITIES }
}



