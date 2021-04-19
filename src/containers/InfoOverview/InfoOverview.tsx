import * as React from 'react';

import {
    Container,
    Grid,
} from '@material-ui/core';

import InformativeCard from '../../components/InformativeCard';

import styles from './InfoOverview.module.css';

const InfoOverview = (): JSX.Element => {

    return (
        <Container
            className={styles.containerGridFullWidth}
            component="div"
            maxWidth="xl"
        >
            <Grid
                container
                className={styles.gridMaxHeight}
                alignContent="center"
                justify="space-evenly"
            >
                <Grid item>
                    <InformativeCard>
                        <>
                            <InformativeCard.Title title="Test" />
                            <InformativeCard.Body>
                                Another test
                            </InformativeCard.Body>
                        </>
                    </InformativeCard>
                </Grid>
            </Grid>
        </Container>
    );
};

export default InfoOverview;