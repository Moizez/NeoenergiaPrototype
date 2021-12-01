import AsyncStorage from '@react-native-async-storage/async-storage'
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import Reactotron from '../config/reactotron'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth', 'user'],
    blacklist: ['storageless']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    persistedReducer,
    compose(applyMiddleware(sagaMiddleware), Reactotron.createEnhancer())
)

const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export { store, persistor }