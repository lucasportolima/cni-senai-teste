import React from 'react';
import { Container } from '@material-ui/core';

import { SafeContainer } from './Safe.style';

const Safe = () => {
    return (
        <SafeContainer>
            <Container>
                Ambiente seguro <i className={'twf-lock'} />
            </Container>
        </SafeContainer>
    );
};

export default Safe;
