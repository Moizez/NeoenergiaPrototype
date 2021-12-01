import { takeLatest, all, select, put, call } from 'redux-saga/effects'
import api from '../../../services/api'
import types from './types'
import { GlobalState } from '../../../utils/types'
import { setReducer } from './actions'

export function* getActivities() {

    const { profile } = yield select((state: GlobalState) => state.user)
    const { token } = yield select((state: GlobalState) => state.auth)

    try {

        const response = yield call(() => api.get(`activities/employee/${profile.id}`, { headers: { Authorization: `Bearer ${token}` } }))
        //@ts-ignore
        yield put(setReducer(response.data['realizadas'], 'activities'))
        //console.log(response.data)

    } catch (error) {
        console.log('Error: ', error)
    }
}


export default all([
    //@ts-ignore
    takeLatest(types.GET_ACTIVITIES, getActivities)
])