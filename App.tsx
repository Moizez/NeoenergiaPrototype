import React, { useState } from 'react';
import { StatusBar } from 'react-native'
// import { ThemeProvider } from 'styled-components';
// import { PersistGate } from 'redux-persist/integration/react'

// import { Provider as PaperProvider } from 'react-native-paper'
// import { Provider as StoreProvider } from 'react-redux'
// import { store, persistor } from './src/store'
import { colors } from './src/styles/theme.json'
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import SplashScreen from './src/screens/Splash';

const App = () => {

	const [wait, setWait] = useState(false)

	let [fontsLoaded] = useFonts({
		Inter_900Black,
	});

	setTimeout(() => {
		setWait(true)
	}, 1000);

	if (!fontsLoaded || !wait) {
		return <SplashScreen />;
	} else {
		return (
			<SplashScreen />
		);
	}
}

export default App
