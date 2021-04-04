import * as React from 'react';
import { RouteComponentProps } from '@reach/router';

import Hero from '../../components/Hero';
import ApplicationHeaderBar from '../../components/ApplicationHeaderBar';
import InformativeCard from '../../components/InformativeCard';
import ParallaxInfo from '../../components/ParallaxInfo';

import award1 from '../../static-assets/award-imgs/angieaward2018.jpeg';
import award2 from '../../static-assets/award-imgs/angieaward2019.jpeg';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SpeedIcon from '@material-ui/icons/Speed';
import WorkIcon from '@material-ui/icons/Work';

import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

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
    let screenWidthMobile = window.matchMedia("(max-width: 600px)")

    const [screenInMobileRange, setScreenInMobileRange] = React.useState(screenWidthMobile.matches);

    React.useEffect(() => {
        window.addEventListener("resize", () => {
            setScreenInMobileRange(window.innerWidth < 600)
        })

        return () => {
            window.removeEventListener("resize", () => {
            setScreenInMobileRange(window.innerWidth < 600)
        });
        }
    }, [])

    return (
        <ThemeProvider theme={fcdcTheme}>
            <div className={styles.homeContainer}>
                <ApplicationHeaderBar />
                <Hero>
                    <>
                        <div className={styles.metaInfo}>
                            <Typography
                                className={styles.styledTitle}
                                variant="h3"
                                classes={{
                                    h3: classes.h3,
                                    root: styles.styledTitle
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
                                className={styles.mainText}
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
                        <div className={styles.awardsContainer}>
                            <img className={styles.award} src={award1} alt="angie award"/>
                            <img className={styles.award} src={award2} alt="angie award"/>
                        </div>
                    </>
                </Hero>
                <Paper
                    className={styles.bottomContainer}
                    color="default"
                    elevation={0}
                    square={true}
                >
                    {/* <section className={styles.bottomContainer}> */}
                        <div className={styles.placement}>
                            <InformativeCard>
                                <>
                                    <InformativeCard.Title title={<MonetizationOnIcon fontSize="large"/>} />
                                    <InformativeCard.Body>
                                        <>
                                            <h2 className={styles.cardTitleSeparator}>Competitive pricing</h2>
                                            {screenInMobileRange ? null : (
                                                <p>
                                                    Our pricing structure is competitive,
                                                    we are always willing to be flexible and work with our customers.
                                                </p>
                                            )}
                                        </>
                                    </InformativeCard.Body>
                                </>
                            </InformativeCard>
                            <InformativeCard>
                                <>
                                    <InformativeCard.Title title={<SpeedIcon fontSize="large"/>} />
                                    <InformativeCard.Body>
                                        <>
                                            <h2 className={styles.cardTitleSeparator}>Quick quality work</h2>
                                            {screenInMobileRange ? null : (
                                                <p>
                                                    We believe time is money! We like to work fast and deliver consistent results.
                                                </p>
                                            )}
                                        </>
                                    </InformativeCard.Body>
                                </>
                            </InformativeCard>
                            <InformativeCard>
                                <>
                                    <InformativeCard.Title title={<WorkIcon fontSize="large"/>} />
                                    <InformativeCard.Body>
                                        <>
                                            <h2 className={styles.cardTitleSeparator}>Years of experience</h2>
                                            {screenInMobileRange ? null : (
                                                <p>
                                                    Backed by 30 years of experience, you can trust that you're in good hands.
                                                    Trust us to handle the edge cases and intricacies of epoxy flooring.
                                                </p>
                                            )}
                                        </>
                                    </InformativeCard.Body>
                                </>
                            </InformativeCard>
                        </div>
                    {/* </section> */}
                </Paper>
            </div>
            <ParallaxInfo>
                {/* TODO: Create Informational Components */}
            </ParallaxInfo>
        </ThemeProvider>
    );
};

export default Home;