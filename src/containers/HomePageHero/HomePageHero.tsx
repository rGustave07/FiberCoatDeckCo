import * as React from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Awards
import angieAward1 from '../../static-assets/award-imgs/angieaward2018.jpeg';
import angieAward2 from '../../static-assets/award-imgs/angieaward2019.jpeg';

import styles from './HomePageHero.module.css';

const useStyles = makeStyles({
    h3: {
        fontFamily: 'Mistral',
    }
});

const HomePageHero = (): JSX.Element => {
    const classes = useStyles();

    return (
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
                    License # 970836
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
            <div className={styles.awardsList}>
                <img className={styles.award} src={angieAward1} alt=""/>
                <img className={styles.award} src={angieAward2} alt=""/>
            </div>
        </>
    )
};

export default HomePageHero;