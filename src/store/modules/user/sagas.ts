import { takeLatest, all, select, put, call } from 'redux-saga/effects'
import { openAlert } from '../storageless/actions'
import api from '../../../services/api'
import types from './types'

import { updateUserSuccess, updateUserFailure } from './actions'
import { GlobalState } from '../../../utils/types'

export function* updateUser({ payload }) {

    const { profile } = yield select((state: GlobalState) => state.user)
    const { token } = yield select((state: GlobalState) => state.auth)

    try {

        const data = new FormData()
        data.append('name', payload.name)
        data.append('job', null)
        data.append('profile_picture', {
            uri: '',
            type: 'image/jpg',
            name: 'teste-app'
        })

        const response = yield call(api.post, `employees/${profile.id}/update`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        });

        if (response.status == 200) {
            yield put(updateUserSuccess(response.data));
        } else {
            //@ts-ignore
            yield put(openAlert({ message: 'Falha ao atualizar usuário!' }))
            yield put(updateUserFailure());
        }


    } catch (error) {
        yield put(updateUserFailure());
        //@ts-ignore
        yield put(openAlert({ message: `Erro: ${error.message}` }))
        console.log(`${error}`)
    }
}


export default all([
    //@ts-ignore
    takeLatest(types.USER_UPDATE_REQUEST, updateUser)
])