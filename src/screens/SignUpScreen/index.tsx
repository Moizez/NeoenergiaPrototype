import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik';
import { initialValuesSignUp, signUpSchema } from '../../schemas/formSchema'
import { signUpRequest } from '../../store/modules/auth/actions'
import { colors } from '../../styles/theme.json'
import { GlobalState } from '../../utils/types'
import { navigate } from '../../utils/rootNavigation'
import { closeAlert } from '../../store/modules/storageless/actions'
import { Keyboard } from 'react-native'
import TextInputMask from '../../components/TextInputMask'

import {
    Container, ContainerKeyboardAvoiding, Title, TextInput,
    Button, Spacer, HelperText, Snackbar, Touchable, Text
} from '../../styles';

const SignUp = () => {

    const dispatch = useDispatch()
    const { loading } = useSelector((state: GlobalState) => state.auth)
    const { alert: { message, visible, color } } = useSelector((state: GlobalState) => state.storageless)
    const [eye, setEye] = useState(false)

    const formik = useFormik({
        initialValues: initialValuesSignUp,
        validationSchema: signUpSchema,
        onSubmit: async (values) => {
            Keyboard.dismiss()
            dispatch(signUpRequest(values))
        }
    })

    return (
        <>
            <Container background='light' hasPadding>

                <Container align='center' justify='center'>
                    <Title color='secondary'>Boilerplate React Native</Title>
                </Container>

                <Spacer />

                <ContainerKeyboardAvoiding flex={3}>

                    <TextInput
                        label='Nome'
                        placeholder='Digite seu nome'
                        placeholderTextColor={formik.touched.name && formik.errors.name ? colors.danger : colors.secondary}
                        value={formik.values.name}
                        onChangeText={formik.handleChange('name')}
                        onBlur={formik.handleBlur('name')}
                        //@ts-ignore
                        error={formik.touched.name && formik.errors.name}
                    />
                    {formik.touched.name && formik.errors.name &&
                        <HelperText>
                            {formik.touched.name && formik.errors.name}
                        </HelperText>
                    }

                    <Spacer />

                    {/*<TextInputMask
                        label='CPF'
                        placeholder='Digite seu cpf'
                        type={'cpf'}
                        placeholderTextColor={formik.touched.cpf && formik.errors.cpf ? colors.danger : colors.secondary}
                        value={formik.values.cpf}
                        onChangeText={formik.handleChange('cpf')}
                        onBlur={formik.handleBlur('cpf')}
                        //@ts-ignore
                        error={formik.touched.cpf && formik.errors.cpf}
                    />
                    {formik.touched.cpf && formik.errors.cpf &&
                        <HelperText>
                            {formik.touched.cpf && formik.errors.cpf}
                        </HelperText>
                    }

                    <Spacer />

                     <TextInputMask
                        label='CNPJ'
                        placeholder='Digite seu CNPJ'
                        type={'cnpj'}
                        placeholderTextColor={formik.touched.cnpj && formik.errors.cnpj ? colors.danger : colors.secondary}
                        value={formik.values.cnpj}
                        onChangeText={formik.handleChange('cnpj')}
                        onBlur={formik.handleBlur('cnpj')}
                        //@ts-ignore
                        error={formik.touched.cnpj && formik.errors.cnpj}
                    />
                    {formik.touched.cnpj && formik.errors.cnpj &&
                        <HelperText>
                            {formik.touched.cnpj && formik.errors.cnpj}
                        </HelperText>
                    }

                    <Spacer />

                    <TextInputMask
                        label='Telefone'
                        placeholder='Digite seu telefone'
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        placeholderTextColor={formik.touched.phone && formik.errors.phone ? colors.danger : colors.secondary}
                        value={formik.values.phone}
                        onChangeText={formik.handleChange('phone')}
                        onBlur={formik.handleBlur('phone')}
                        //@ts-ignore
                        error={formik.touched.phone && formik.errors.phone}
                    />
                    {formik.touched.phone && formik.errors.phone &&
                        <HelperText>
                            {formik.touched.phone && formik.errors.phone}
                        </HelperText>
                    }

                    <Spacer />

                    <TextInputMask
                        label='Data de nascimento'
                        placeholder='Digite sua data de nascimento'
                        type={'datetime'}
                        options={{ format: 'DD/MM/YYYY' }}
                        placeholderTextColor={formik.touched.birthday && formik.errors.birthday ? colors.danger : colors.secondary}
                        value={formik.values.birthday}
                        onChangeText={formik.handleChange('birthday')}
                        onBlur={formik.handleBlur('birthday')}
                        //@ts-ignore
                        error={formik.touched.birthday && formik.errors.birthday}
                    />
                    {formik.touched.birthday && formik.errors.birthday &&
                        <HelperText>
                            {formik.touched.birthday && formik.errors.birthday}
                        </HelperText>
                    }

                    <Spacer />

                    <TextInputMask
                        label='CEP'
                        placeholder='Digite seu cep'
                        type={'zip-code'}
                        placeholderTextColor={formik.touched.cep && formik.errors.cep ? colors.danger : colors.secondary}
                        value={formik.values.cep}
                        onChangeText={formik.handleChange('cep')}
                        onBlur={formik.handleBlur('cep')}
                        //@ts-ignore
                        error={formik.touched.cep && formik.errors.cep}
                    />
                    {formik.touched.cep && formik.errors.cep &&
                        <HelperText>
                            {formik.touched.cep && formik.errors.cep}
                        </HelperText>
                    }

                    <Spacer />

                    <TextInputMask
                        label='Valor na carteira'
                        placeholder='Digite seu valor atual da carteira'
                        type={'money'}
                        options={{
                            precision: 2,
                            separator: ',',
                            delimiter: '.',
                            unit: 'R$',
                            suffixUnit: ''
                        }}
                        placeholderTextColor={formik.touched.wallet && formik.errors.wallet ? colors.danger : colors.secondary}
                        value={formik.values.wallet}
                        onChangeText={formik.handleChange('wallet')}
                        onBlur={formik.handleBlur('wallet')}
                        //@ts-ignore
                        error={formik.touched.wallet && formik.errors.wallet}
                    />
                    {formik.touched.wallet && formik.errors.wallet &&
                        <HelperText>
                            {formik.touched.wallet && formik.errors.wallet}
                        </HelperText>
                    }

                    <Spacer /> */}

                    <TextInput
                        label='E-mail'
                        placeholder='Digite seu e-mail'
                        placeholderTextColor={formik.touched.email && formik.errors.email ? colors.danger : colors.secondary}
                        keyboardType='email-address'
                        autoCapitalize='none'
                        value={formik.values.email}
                        onChangeText={formik.handleChange('email')}
                        onBlur={formik.handleBlur('email')}
                        //@ts-ignore
                        error={formik.touched.email && formik.errors.email}
                    />
                    {formik.touched.email && formik.errors.email &&
                        <HelperText>
                            {formik.touched.email && formik.errors.email}
                        </HelperText>
                    }

                    <Spacer />

                    <TextInput
                        label='Senha'
                        placeholder='Digite sua senha'
                        placeholderTextColor={formik.touched.password && formik.errors.password ? colors.danger : colors.secondary}
                        secureTextEntry
                        autoCapitalize='none'
                        value={formik.values.password}
                        onChangeText={formik.handleChange('password')}
                        onBlur={formik.handleBlur('password')}
                        //@ts-ignore
                        error={formik.touched.password && formik.errors.password}
                    />
                    {formik.touched.password && formik.errors.password &&
                        <HelperText type="error">
                            {formik.touched.password && formik.errors.password}
                        </HelperText>
                    }

                    <Spacer />

                    <TextInput
                        label='Confirme sua senha'
                        placeholder='Digite novamente a sua senha'
                        placeholderTextColor={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? colors.danger : colors.primary}
                        secureTextEntry={eye ? false : true}
                        autoCapitalize='none'
                        value={formik.values.passwordConfirmation}
                        onChangeText={formik.handleChange('passwordConfirmation')}
                        onBlur={formik.handleBlur('passwordConfirmation')}
                        //@ts-ignore
                        error={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
                        right={
                            <TextInput.Icon
                                color={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? colors.danger : colors.primary}
                                name={eye ? 'eye' : 'eye-off'}
                                onPress={() => setEye(!eye)}
                                style={{ marginTop: 15 }}
                            />
                        }
                    />
                    {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation &&
                        <HelperText type="error">
                            {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
                        </HelperText>
                    }

                    <Spacer size={20} />

                    <Button
                        block
                        background='primary'
                        onPress={formik.handleSubmit}
                        loading={loading}
                    >
                        Cadastrar
                    </Button>


                    <Touchable
                        onPress={() => navigate('SignIn')}
                        align='center'
                        justify='center'
                        margin='30px 0'
                        activeOpacity={0.7}
                    >
                        <Text small>Já tem uma conta? <Text small bold>Logue-se.</Text></Text>
                    </Touchable>

                    {/* <Spacer size={50} /> */}

                </ContainerKeyboardAvoiding>



            </Container>
            <Snackbar
                visible={visible}
                onDismiss={() => dispatch(closeAlert())}
                background={color}
                time={3000}
            >
                {message}
            </Snackbar>
        </>

    )
}

export default SignUp;