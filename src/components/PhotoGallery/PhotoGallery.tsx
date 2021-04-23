import { Typography } from '@material-ui/core';
import React from 'react'

import TopLevelContainer from '../../containers/TopLevelContainer';

import styles from './PhotoGallery.module.css';
import commonStyles from '../../common/common.module.css';

const Photogallery = () => {
    return (
        <TopLevelContainer>
            <section className={styles.titleContainer}>
                <div className="title">
                    <Typography
                        className={commonStyles.fontTitle}
                        component="h1"
                        align="center"
                    >
                        Gallery
                    </Typography>
                    <Typography>
                        Here are a few photos of our work!
                    </Typography>
                </div>
            </section>
        </TopLevelContainer>
    )
}

export default Photogallery
