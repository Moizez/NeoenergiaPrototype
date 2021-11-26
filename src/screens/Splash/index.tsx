import React from 'react';

import { Container, Title, Text } from '../../styles';

const SplashScreen = () => {
    return (
        <Container style={{ backgroundColor: '#fff' }} align='center' justify='center'>
            <Title>Bem-vindo ao Boilerplate</Title>
            <Text>Carregando...</Text>
        </Container>
    )
}

export default SplashScreen;