import React from 'react';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-looped-carousel';

import { Container, Touchable, Image } from '../../styles';

const { width, height } = Dimensions.get('window');
const size = { width, height };

const Slider = () => {

    // const handleNextPage = (index: number) => {
    //     console.log(index);
    // };

    return (

        <Carousel
            delay={2000}
            style={size}
            autoplay
            //onAnimateNextPage={handleNextPage}
        >
            <Container customPadding='0 20px'>
                <Touchable>
                    <Image
                        source={{ uri: 'https://servicos.neoenergiacosern.com.br/a-cosern/Documents/Banner/ClubedeVantagens_Banner.jpg' }}
                        width='100%'
                    />
                </Touchable>
            </Container>

            <Container customPadding='0 20px'>
                <Image
                    source={{ uri: 'https://servicos.neoenergiacosern.com.br/configuracoes/PublishingImages/201021_picpay.jpg' }}
                    width='100%'
                />
            </Container>

            <Container customPadding='0 20px'>
                <Image
                    source={{ uri: 'https://servicos.neoenergiacosern.com.br/configuracoes/PublishingImages/Energiapararecome%C3%A7ar_BannerDistribuidoras_1200x316.jpg' }}
                    width='100%'
                />
            </Container>

            <Container customPadding='0 20px'>
                <Image
                    source={{ uri: 'https://servicos.neoenergiacosern.com.br/a-cosern/Documents/Banner/2910_Banner_chamadapublica-EE_distribuidoras.jpg' }}
                    width='100%'
                />
            </Container>

            <Container customPadding='0 20px'>
                <Image
                    source={{ uri: 'https://servicos.neoenergiacosern.com.br/configuracoes/PublishingImages/NEO_DIVIDA_ZERO_BANNER_SITE_1200x316px3%20(1).jpg' }}
                    width='100%'
                />
            </Container>
        </Carousel>
    )
}

export default Slider;