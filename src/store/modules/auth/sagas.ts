import { takeLatest, all, select, put, call } from 'redux-saga/effects'
import api from '../../../services/api'
import types from './types'

import { signInFailure, signInSuccess } from './actions'
import { openAlert } from '../storageless/actions'

export function* signIn({ payload }) {

    try {
        const { email, password } = payload
        const response = yield call(api.post, '/login', { email, password })
        const { token, user } = response.data

        if (!token) {
            //@ts-ignore
            yield put(openAlert({ message: 'Token não identificado!' }))
            yield put(signInFailure());
        } else {
            //@ts-ignore
            api.defaults.headers.Authorization = `Bearer ${token}`;
            yield put(signInSuccess({ token: token, profile: user }));
        }

    } catch (error) {
        yield put(signInFailure());
        //@ts-ignore
        yield put(openAlert({ message: `Erro: ${error.message}` }))
        console.log(`Erro: ${error}`)
    }
}

export function* signUp({ payload }) {

    try {

        const { name, email, password, passwordConfirmation } = payload

        const data = {
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            terms_and_conditions: true,
        }

        const response = yield call(api.post, '/register', data)
        const { token, user } = response.data

        if (!token) {
            //@ts-ignore
            yield put(openAlert('Token não identificado!'))
            yield put(signInFailure());
        } else {
            //@ts-ignore
            api.defaults.headers.Authorization = `Bearer ${token}`;
            yield put(signInSuccess({ token: token, profile: user }));
        }

    } catch (error) {
        yield put(signInFailure());
        //@ts-ignore
        yield put(openAlert({message: `Erro: ${error.message}`}))
        console.log(`Erro: ${error}`)
    }
}

export function setToken(payload) {

    if (!payload) return;

    const { token } = payload?.auth || payload?.token;
    //console.log("TOKEN", token)
    if (token) {
        //@ts-ignore
        api.defaults.headers.Authorization = `Bearer ${token}`;
        return;
    }
}


export default all([
    //@ts-ignore
    takeLatest(types.SIGN_IN_REQUEST, signIn),
    //@ts-ignore
    takeLatest(types.SIGN_UP_REQUEST, signUp)
])