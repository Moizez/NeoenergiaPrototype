import React, { useEffect } from 'react';
import { MaterialIcons as Icon } from '@expo/vector-icons'
import YoutubePlayer from "react-native-youtube-iframe"
import { useDispatch, useSelector } from 'react-redux'
import Slider from '../../components/Slider';

import { ScrollView, Container, Title, Text, ActivityIndicator, Spacer, Searchbar, Touchable } from '../../styles'

const Home = () => {

    return (
        <ScrollView background='light'>

            {/* ÁREA DO HEADER */}
            <Container>

                <Container
                    background='primary'
                    height='200px'
                    hasPadding
                    style={{
                        borderBottomEndRadius: 10,
                        borderBottomStartRadius: 10
                    }}
                >
                    <Title color='light'>Olá, Moisés Henrique</Title>

                </Container>

                <Container
                    align='center'
                    justify='center'
                    customPadding='0 20px 0 20px'
                >
                    <Container
                        height='100px'
                        background='light'
                        customPadding='10px'
                        align='center'
                        radius
                        style={{
                            marginTop: -70,
                            elevation: 3
                        }}
                    >
                        <Text>Nº do Contrato</Text>
                        <Title align='center' big bold>007586462235</Title>
                    </Container>

                </Container>

            </Container>

            <Spacer size={20} />

            {/* ÁREA DOS PRINCIPAIS SERVIÇOS */}
            <Container
                background='light'
                customPadding='0 20px'
            >
                <Title bold color='#02a47e'>Serviços</Title>

                <Container
                    row
                    wrap='wrap'
                    align='center'
                    justify='space-between'
                >

                    <Touchable
                        height='110px'
                        width='48%'
                        align='center'
                        justify='center'
                        radius
                        background='light-primary'
                        margin='5px 0px'
                        style={{ elevation: 5 }}
                    >
                        <Icon name='payment' color='#fff' size={50} />
                        <Text color='light' bold>Via de Pagamento</Text>
                    </Touchable>

                    <Touchable
                        height='110px'
                        width='48%'
                        align='center'
                        justify='center'
                        radius
                        background='light-primary'
                        margin='5px 0px'
                        style={{ elevation: 5 }}
                    >
                        <Icon name='bolt' color='#fff' size={50} />
                        <Text color='light' bold>Religação</Text>
                    </Touchable>

                    <Touchable
                        height='110px'
                        width='48%'
                        align='center'
                        justify='center'
                        radius
                        background='light-primary'
                        margin='5px 0px'
                        style={{ elevation: 5 }}
                    >
                        <Icon name='lightbulb' color='#fff' size={50} />
                        <Text color='light' bold>Falta de Luz</Text>
                    </Touchable>

                    <Touchable
                        height='110px'
                        width='48%'
                        align='center'
                        justify='center'
                        radius
                        background='light-primary'
                        margin='5px 0px'
                        style={{ elevation: 5 }}
                    >
                        <Icon name='bar-chart' color='#fff' size={50} />
                        <Text color='light' bold>Histórico</Text>
                    </Touchable>

                    <Touchable
                        height='110px'
                        width='48%'
                        align='center'
                        justify='center'
                        radius
                        background='light-primary'
                        margin='5px 0px'
                        style={{ elevation: 5 }}
                    >
                        <Icon name='search' color='#fff' size={50} />
                        <Text color='light' bold>Consulta de Débitos</Text>
                    </Touchable>

                    <Touchable
                        height='110px'
                        width='48%'
                        align='center'
                        justify='center'
                        radius
                        background='light-primary'
                        margin='5px 0px'
                        style={{ elevation: 5 }}
                    >
                        <Icon name='contacts' color='#fff' size={50} />
                        <Text color='light' bold>Contatos</Text>
                    </Touchable>

                </Container>

            </Container>

            <Spacer size={20} />

            {/* ÁREA DE NOTÍCIAS */}
            <Container
                background='light'
                customPadding='0 20px'
            >
                <Title bold color='info'>Notícias</Title>

                <Container
                    wrap='wrap'
                    align='center'
                    justify='space-between'
                >

                    <Touchable
                        width='100%'
                        radius
                        background='light'
                        margin='5px 0px'
                        style={{ elevation: 5 }}
                        customPadding='15px 10px'
                    >
                        <Text color='third' bold>Neoenergia Cosern reforça orientações de segurança em casas de praia e clubes</Text>
                        <Text small>É importante fazer uma revisão das instalações elétricas nesses locais, que passam boa parte do ano fechados....</Text>
                    </Touchable>

                    <Touchable
                        width='100%'
                        radius
                        background='light'
                        margin='5px 0px'
                        style={{ elevation: 5 }}
                        customPadding='15px 10px'
                    >
                        <Text color='third' bold>Tibau, na Costa Branca, recebe o projeto “Energia com Cidadania” até sexta-feira (3)</Text>
                        <Text small>População vai poder trocar lâmpadas ineficientes por LED em carreta estacionada em frente ao Centro Administrativo Municipal...</Text>
                    </Touchable>

                    <Touchable
                        width='100%'
                        radius
                        background='light'
                        margin='5px 0px'
                        style={{ elevation: 5 }}
                        customPadding='15px 10px'
                    >
                        <Text color='third' bold>Neonergia Cosern dá dicas de segurança e de economia para montar a decoração natalina</Text>
                        <Text small>Consumidores devem ficar de olho na qualidade do material utilizado e no tempo que as luzes natalinas ficam acesa...</Text>
                    </Touchable>

                </Container>

            </Container>

            <Spacer size={20} />

            {/* ÁREA DE VÍDEOS */}
            <Container
                background='light'
                customPadding='0 20px'
            >
                <Title bold color='danger'>Nosso Canal</Title>

                <Container
                    wrap='wrap'
                    align='center'
                    justify='space-between'
                >

                    <YoutubePlayer
                        height={180}
                        //@ts-ignore
                        width='100%'
                        videoId='YACsVefFjDA'
                    />

                </Container>

            </Container>

            {/* ÁREA DO BANNER */}
            <Container height='100px'>
                <Slider />
            </Container>

            <Spacer size={20} />

        </ScrollView>
    )
}

export default Home;