import React, { createRef } from 'react';
import { Container, Button, Title, Spacer, Modal } from '../../../styles';

type ModalizeProps = {
    close: () => void,
    open: () => void
}

export const modalRef = createRef<ModalizeProps>()

type ActionModalProps = {
    handleAction: () => void,
}

const ActionModal = ({ handleAction }: ActionModalProps) => {
    return (
        <Modal ref={modalRef} adjustToContentHeight>
            <Container align='center'>
                <Title small customPadding='10px 0 0 0'>Deseja realmente sair?</Title>

                <Container row hasPadding justify='space-around'>
                    <Button half onPress={handleAction}>Sim</Button>
                    <Spacer vertical />
                    <Button half onPress={() => modalRef.current.close()}>Não</Button>
                </Container>

            </Container>
        </Modal>
    )
}

export default ActionModal;