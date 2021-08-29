import * as React from 'react';
import { RouteComponentProps } from '@reach/router';

import Hero from '../../components/Hero';
import ApplicationHeaderBar from '../../components/ApplicationHeaderBar';
import InformativeCard from '../../components/InformativeCard';
import ParallaxInfo from '../../components/ParallaxInfo';

import award1 from '../../static-assets/award-imgs/angieaward2018.jpeg';
import award2 from '../../static-assets/award-imgs/angieaward2019.jpeg';
import deckImage from '../../static-assets/img/deckimg.jpg';

import { useMediaQuery } from '@material-ui/core';
import Button from '@material-ui/core/Button';
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
import commonStyles from '../../common/common.module.css';

interface Props extends RouteComponentProps {}

const useStyles = makeStyles({
    h3: {
        fontFamily: 'Mistral',
    },
    noLineHeight: {
        lineHeight: 1,
    }
})

const Home = (props: Props): JSX.Element => {
    const classes = useStyles();
    const screenInMobileRange = useMediaQuery("(max-width: 600px)");

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
                                            {/* <h2 className={styles.cardTitleSeparator}>Competitive pricing</h2> */}
                                            <Typography>Competitive pricing</Typography>
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
                                            {/* <h2 className={styles.cardTitleSeparator}>Quick quality work</h2> */}
                                            <Typography>Quick, quality work</Typography>
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
                                            {/* <h2 className={styles.cardTitleSeparator}>Years of experience</h2> */}
                                            <Typography>Years of experience</Typography>
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
            <ParallaxInfo orientation={screenInMobileRange ? "vertical" : "horizontal"}>
                {/* TODO: Create Informational Components */}
                <section className={styles.topLeft}>
                    <Paper className={styles.floatingBox} elevation={3}>
                        <Typography component="h2" align="center">
                            Roll on Rock
                        </Typography>
                        <hr/>
                        <Typography align="center" gutterBottom>Product</Typography>
                        <Typography variant="body2" classes={{root: classes.noLineHeight}}>
                            Roll on Rock will transform your dull and dready concrete floor into a stunning, and seamless masterpiece.
                            Rest assured that you're getting the absolute best-looking, clear topcoat available in your country. 
                        </Typography>
                        <div className={styles.readMoreBtn}>
                            <Button 
                                variant="contained"
                                onClick={(): void => {
                                    window.open("https://www.garagecoatings.com/", "_blank")
                                }}
                            >
                                Read More
                            </Button>
                        </div>
                    </Paper>
                </section>

                <section className={styles.topRight}>
                    <Paper className={styles.floatingBox} elevation={3}>
                        <Typography component="h2" align="center">
                            Versa-Deck
                        </Typography>
                        <hr/>
                        <Typography align="center" gutterBottom>Product</Typography>
                        <Typography variant="body2" classes={{root: classes.noLineHeight}}>
                            Versa-Deck is an extremely tough, metal lath reinforced fiberglass deck coating system
                            that is designed to be used over new and previously coated plywood and concrete walking deck surfaces.
                        </Typography>
                        <div className={styles.readMoreBtn}>
                            <Button
                                variant="contained"
                                onClick={(): void => {
                                    window.open("https://drive.google.com/file/d/1vnicy4sd9u_pHox9ds8GdrnRpP2oU1HU/view", "_blank")
                                }}
                                >
                                    Read More
                            </Button>
                        </div>
                    </Paper>
                </section>

                <section className={styles.bottom}>
                    <Paper className={styles.longWidthFloatingBox}>
                        <Typography component="h2" align="center">
                            Serving Southern California for 30 Years!
                        </Typography>
                        <hr/>
                        <div className={styles.bottomInfoContainer}>
                            <div className={styles.infoBox}>
                                <Typography component="h4" align="center" className={commonStyles.marginBottomSm}>
                                    Our Promise
                                </Typography>
                                <Typography
                                    component="p"
                                    align="center"
                                    classes={{root: classes.noLineHeight}}
                                >
                                    We take great pride in our work and we make sure every job is done right the first time. 
                                    We are capable of waterproofing over any surface. 
                                    We offer competitive pricing, Quality work On Time! Please contact us for a FREE Quote Today!
                                </Typography>
                            </div>
                            <div className={styles.infoBox}>
                                <img
                                    className={commonStyles.imgFill}
                                    src={deckImage}
                                    alt="deck"
                                />
                            </div>
                            <div className={styles.infoBox}>
                                <Typography component="h4" align="center" className={commonStyles.marginBottomSm}>
                                    Benefits of Epoxy Flooring
                                </Typography>
                                <Typography
                                    component="p"
                                    align="center"
                                    classes={{root: classes.noLineHeight}}
                                >
                                    <ul>
                                        <li>
                                            Offers a hard-wearing durable surface able to withstand heavy and continuous traffic
                                        </li>
                                        <li>
                                            Durable and easy to clean
                                        </li>
                                        <li>
                                            Resists oil stains and water
                                        </li>
                                        <li>Prevents wear and tear on existing concerete</li>
                                    </ul>
                                </Typography>
                            </div>
                        </div>
                    </Paper>
                </section>
            </ParallaxInfo>
        </ThemeProvider>
    );
};

export default Home;