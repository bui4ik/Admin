import React from 'react';
import { addDecorator } from '@storybook/react';
import GlobalStyle from '../src/config/globalStyle';

addDecorator(story => (
    <>
        <GlobalStyle />
        {story()}
    </>
));
