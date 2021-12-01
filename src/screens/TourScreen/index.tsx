import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { replace } from '../../utils/rootNavigation';
import { onboardRequest } from '../../store/modules/auth/actions';
import logo from '../../assets/images/logo.png'

import { Container, Title, Button, Spacer, Text, ScrollView, Onboarding, Image } from '../../styles';

const Tour = () => {

    const dispatch = useDispatch()
    const [currentTour, setCurrentTour] = useState(0)

    const goToSignIn = () => {
        dispatch(onboardRequest())
        replace('SignIn')
    }

    const NextButton = ({ ...props }) => (
        <Button {...props} mode='text' textColor='dark'>
            Próximo
        </Button>
    );

    const SkipButton = ({ skipLabel, ...props }) => (
        <Button {...props} onPress={goToSignIn} mode='text' textColor='dark'>
            Pular
        </Button>
    );

    const DoneButton = ({ ...props }) => (
        <Button {...props} onPress={goToSignIn} mode='text' textColor='dark'>
            Começar
        </Button>
    );

    return (
        <Onboarding
            NextButtonComponent={NextButton}
            SkipButtonComponent={SkipButton}
            DoneButtonComponent={DoneButton}
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image source={logo} />,
                    title: 'Boilerplate React native',
                    subtitle: 'App de exemplo para novos projetos',
                },
                {
                    backgroundColor: '#fe6e58',
                    image: <Image source={logo} />,
                    title: 'Tela de apresentação',
                    subtitle: 'Pequena descrição aqui neste campo',
                },
                {
                    backgroundColor: '#999',
                    image: <Image source={logo} />,
                    title: 'Tela para iniciar o APP',
                    subtitle: "Última tela antes de entrar no APP",
                },
            ]}
        />
    )
}

export default Tour;