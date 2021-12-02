import React from 'react';
//@ts-ignore
import logo from '../../assets/images/logo-removebg.png'

import { Container, Title, Text, Image } from '../../styles';

const SplashScreen = () => {
    return (
        <Container style={{ backgroundColor: '#fff' }} align='center' justify='center'>
            <Image
                source={logo}
                height='250px'
                width='250px'
            />
        </Container>
    )
}

export default SplashScreen;