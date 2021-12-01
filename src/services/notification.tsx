import React, { useState, useEffect, useRef } from 'react';
import * as Notifications from 'expo-notifications';
import { Text, View } from 'react-native';

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: false,
		shouldSetBadge: false,
	}),
});

const Notification = () => {
	const [notification, setNotification] = useState(false);
	const notificationListener = useRef();
	const responseListener = useRef();

	useEffect(() => {
		// Este listener é disparado sempre que uma notificação é recebida enquanto o aplicativo está em primeiro plano
		notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
			setNotification(notification);
		});

		// Este listener é disparado sempre que um usuário toca ou interage com uma notificação (funciona quando o aplicativo está em primeiro plano, em segundo plano ou desativado)
		responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
			console.log(response);
		});

		return () => {
			Notifications.removeNotificationSubscription(notificationListener.current);
			Notifications.removeNotificationSubscription(responseListener.current);
		};
	}, []);

	return (
		<View
			style={{
				marginTop: 50,
				alignItems: 'center',
				justifyContent: 'space-around',
			}}>
			<View style={{ alignItems: 'center', justifyContent: 'center' }}>
				<Text>Title: {notification && notification.request.content.title} </Text>
				<Text>Body: {notification && notification.request.content.body}</Text>
				<Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
			</View>
		</View>
	);
}

export default Notification