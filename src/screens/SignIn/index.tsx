import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native'
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik';
import { initialValuesSignIn, signInSchema } from '../../schemas/formSchema'
import { colors } from '../../styles/theme.json'
import { GlobalState } from '../../utils/types'
import { navigate } from '../../utils/rootNavigation'
// import { closeAlert, openAlert } from '../../store/modules/storageless/actions'
import { Keyboard } from 'react-native'

import {
    Container, ContainerKeyboardAvoiding, Title, Text, TextInput,
    Button, Spacer, HelperText, Snackbar, Touchable
} from '../../styles';

const SignIn = () => {

    const dispatch = useDispatch()
    const [expoPushToken, setExpoPushToken] = useState('')
    const { loading } = useSelector((state: GlobalState) => state.auth)
    const { alert: { message, visible, color, time } } = useSelector((state: GlobalState) => state.storageless)
    const [eye, setEye] = useState(false)

    const formik = useFormik({
        initialValues: initialValuesSignIn,
        validationSchema: signInSchema,
        onSubmit: async (values) => {
            Keyboard.dismiss()
        }
    })

    const registerForPushNotificationsAsync = async () => {
        let token: string;
        if (Constants.isDevice) {
            const { status: existingStatus } = await Notifications.getPermissionsAsync();
            let finalStatus = existingStatus;
            if (existingStatus !== 'granted') {
                const { status } = await Notifications.requestPermissionsAsync();
                finalStatus = status;
            }
            if (finalStatus !== 'granted') {
                dispatch(openAlert({ message: 'Falha ao obter token push para notificação push!', color: colors.danger }));
                return;
            }
            token = (await Notifications.getExpoPushTokenAsync()).data;
            console.log('Expo Token: ', token);
        } else {
            dispatch(openAlert({ message: 'Deve usar dispositivo físico para notificações push', color: colors.info }));
        }

        if (Platform.OS === 'android') {
            Notifications.setNotificationChannelAsync('default', {
                name: 'default',
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: '#FF231F7C'
            });
        }

        return token;
    }

    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    }, [])

    return (
        <>
            <Container background='light' hasPadding>

                <Container align='center' justify='center'>
                    <Title color='secondary'>Boilerplate React Native</Title>
                    <Text>App exemplo para novos projetos</Text>

                </Container>

                <ContainerKeyboardAvoiding>

                    <TextInput
                        label='Seu e-mail'
                        placeholder='Digite seu e-mail'
                        placeholderTextColor={formik.touched.email && formik.errors.email ? colors.danger : colors.secondary}
                        keyboardType='email-address'
                        autoCapitalize='none'
                        value={formik.values.email}
                        onChangeText={formik.handleChange('email')}
                        onBlur={formik.handleBlur('email')}
                        //@ts-ignore
                        error={formik.touched.email && formik.errors.email}
                        right={
                            <TextInput.Icon
                                color={formik.touched.email && formik.errors.email ? colors.danger : colors.secondary}
                                name='email'
                                style={{ marginTop: 15 }}
                            />
                        }
                    />
                    {formik.touched.email && formik.errors.email &&
                        <HelperText>
                            {formik.touched.email && formik.errors.email}
                        </HelperText>
                    }

                    <Spacer />

                    <TextInput
                        label='Sua senha'
                        placeholder='Digite sua senha'
                        placeholderTextColor={formik.touched.password && formik.errors.password ? colors.danger : colors.secondary}
                        secureTextEntry={eye ? false : true}
                        autoCapitalize='none'
                        value={formik.values.password}
                        onChangeText={formik.handleChange('password')}
                        onBlur={formik.handleBlur('password')}
                        //@ts-ignore
                        error={formik.touched.password && formik.errors.password}
                        right={
                            <TextInput.Icon
                                color={formik.touched.password && formik.errors.password ? colors.danger : colors.secondary}
                                name={eye ? 'eye-off' : 'eye'}
                                onPress={() => setEye(!eye)}
                                style={{ marginTop: 15 }}
                            />
                        }
                    />
                    {formik.touched.password && formik.errors.password &&
                        <HelperText type="error">
                            {formik.touched.password && formik.errors.password}
                        </HelperText>
                    }

                    <Spacer size={20} />

                    <Button
                        block
                        background='secondary'
                        onPress={formik.handleSubmit}
                        loading={loading}
                    >
                        Entrar
                    </Button>

                    <Touchable
                        onPress={() => navigate('SignUp')}
                        align='center'
                        justify='center'
                        margin='30px 0'
                    >
                        <Text small>Cadastre-se aqui</Text>
                    </Touchable>

                </ContainerKeyboardAvoiding>

            </Container>

            <Snackbar
                visible={visible}
                onDismiss={() => dispatch(closeAlert())}
                time={time}
                background={color}
            >
                {message}
            </Snackbar>
        </>

    )
}

export default SignIn;