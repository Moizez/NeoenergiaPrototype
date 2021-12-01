import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from '../utils/rootNavigation'
import { GlobalState } from '../utils/types'
import { useSelector } from 'react-redux'

import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

const Routes = () => {

    const { signed, onboard } = useSelector((state: GlobalState) => state.auth);

    return (
        //@ts-ignore
        <NavigationContainer ref={navigationRef}>
            {!signed ? <AppRoutes /> : <AuthRoutes initialRoute={onboard} />}
        </NavigationContainer>
    )
}

export default Routes