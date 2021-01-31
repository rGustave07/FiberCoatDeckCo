import * as React from 'react';
import { RouteComponentProps } from '@reach/router';

import Hero from '../../components/Hero';
import ApplicationHeaderBar from '../../components/ApplicationHeaderBar';

import { makeStyles } from '@material-ui/core/styles';

import {
    ThemeProvider,
    Typography,
} from '@material-ui/core'

import fcdcTheme from '../../theme';

import styles from './Home.module.css';

interface Props extends RouteComponentProps {}

const useStyles = makeStyles({
    h3: {
        fontFamily: 'Mistral',
    }
})

const Home = (props: Props): JSX.Element => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={fcdcTheme}>
            <div className={styles.homeContainer}>
                <ApplicationHeaderBar />
                <Hero>
                    <>
                        <div className={styles.metaInfo}>
                            <Typography
                                variant="h3"
                                className={styles.styledTitle}
                                classes={{
                                    h3: classes.h3
                                }}
                                color="textPrimary"
                            >
                                Fiber-Coat Deck Company
                            </Typography>
                            <Typography color="textPrimary">
                                License #970836
                            </Typography>
                        </div>
                        <div>
                            <Typography
                                align="center"
                                variant="h4"
                                color="textPrimary"
                            >
                                Your trusted Fiber Glass Coating and Epoxy Installer
                            </Typography>
                            <Typography
                                align="center"
                                component="p"
                                color="textPrimary"
                            >
                                30+ Years in the business!
                            </Typography>
                        </div>
                    </>
                </Hero>
            </div>
        </ThemeProvider>
    );
};

export default Home;