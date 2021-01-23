import * as React from 'react';
import { RouteComponentProps } from '@reach/router';

import { ThemeProvider } from '@material-ui/core'
import fcdcTheme from '../../theme';

import styles from './Home.module.css';

interface Props extends RouteComponentProps {}

const Home = (props: Props): JSX.Element => {

    return (
        <ThemeProvider theme={fcdcTheme}>
            <div className={styles.homeContainer} tabIndex={-1}>
                Ritter/Randy/Matheo
            </div>
        </ThemeProvider>
    );
};

export default Home;