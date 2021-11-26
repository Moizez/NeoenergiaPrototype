import React from 'react'
import { TextInput } from '../../styles';
import { TextInputMask } from 'react-native-masked-text'

const InputMaskComponent = (inputProps: any) => {
    return (
        <TextInput {...inputProps}
            //@ts-ignore
            render={(props) => <TextInputMask {...props} />}
        />
    )
}

export default InputMaskComponent;