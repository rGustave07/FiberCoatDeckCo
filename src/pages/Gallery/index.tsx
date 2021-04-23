import * as React from 'react';
import { RouteComponentProps } from '@reach/router';

import {
    ThemeProvider,
} from '@material-ui/core'

import fcdcTheme from '../../theme';
import PhotoGallery from '../../components/PhotoGallery';
import ApplicationHeaderBar from '../../components/ApplicationHeaderBar';

interface Props extends RouteComponentProps {}

const Gallery = (props: Props): JSX.Element => {

    return (
        <ThemeProvider theme={fcdcTheme}>
            <ApplicationHeaderBar />
            <PhotoGallery />
        </ThemeProvider>
    );
};

export default Gallery;