import React, { useState } from 'react';
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react'

import { Provider as PaperProvider } from 'react-native-paper'
import { Provider as StoreProvider } from 'react-redux'
import { store, persistor } from './src/store'
import { colors } from './src/styles/theme.json'
import SplashScreen from './src/screens/SplashScreen';
import Routes from './src/routes';
import {
	useFonts,
	Roboto_100Thin,
	Roboto_100Thin_Italic,
	Roboto_300Light,
	Roboto_300Light_Italic,
	Roboto_400Regular,
	Roboto_400Regular_Italic,
	Roboto_500Medium,
	Roboto_500Medium_Italic,
	Roboto_700Bold,
	Roboto_700Bold_Italic,
	Roboto_900Black,
	Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';

const App = () => {

	const [wait, setWait] = useState(false)

	let [fontsLoaded] = useFonts({
		Roboto_100Thin,
		Roboto_100Thin_Italic,
		Roboto_300Light,
		Roboto_300Light_Italic,
		Roboto_400Regular,
		Roboto_400Regular_Italic,
		Roboto_500Medium,
		Roboto_500Medium_Italic,
		Roboto_700Bold,
		Roboto_700Bold_Italic,
		Roboto_900Black,
		Roboto_900Black_Italic,
	});

	setTimeout(() => {
		setWait(true)
	}, 1000);

	if (!fontsLoaded || !wait) {
		return <SplashScreen />;
	} else {
		return (
			<StoreProvider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ThemeProvider theme={colors}>
						<PaperProvider>
							<StatusBar backgroundColor={colors.light} barStyle='dark-content' />
							<Routes />
						</PaperProvider>
					</ThemeProvider>
				</PersistGate>
			</StoreProvider>
		);
	}
}

export default App
