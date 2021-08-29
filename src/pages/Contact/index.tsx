import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { ThemeProvider } from '@material-ui/core';
import ApplicationHeaderBar from '../../components/ApplicationHeaderBar';
import ContactForm from '../../components/ContactForm';

import fcdcTheme from '../../theme';
interface Props extends RouteComponentProps {}

const Contact = (props: Props): JSX.Element => {

    return (
        <ThemeProvider theme={fcdcTheme}>
            <ApplicationHeaderBar />
            <ContactForm />
        </ThemeProvider>
    );
};

export default Contact;